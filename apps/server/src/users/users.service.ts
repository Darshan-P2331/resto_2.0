import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import type { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/email/email.service';

interface JwtPayload {
  name: string;
  email: string;
  password: string;
}

interface TokenPayload {
  id: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
    private emailService: EmailService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const existingUser = await this.userModel.findOne({ email }).exec();
    if (existingUser) {
      throw new NotFoundException('This email is already registered');
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = { ...createUserDto, password: passwordHash };
    const activationToken = this.generateActivationToken(newUser);
    const url = `${process.env.CLIENT_URL}/user/activate/${activationToken}`;
    await this.emailService.sendEmail(email, 'Verify you email', url);
    return 'Register Success! Please activate your email to start.';
  }

  async activateEmail(token: string) {
    const user = this.jwtService.verify<JwtPayload>(token, {
      secret: process.env.ACTIVATION_TOKEN_SECRET,
    });
    const { name, email, password } = user;
    const checkUser = await this.userModel.findOne({ email }).exec();
    if (checkUser) {
      throw new ConflictException('This email is already registered');
    }
    const newUser = new this.userModel({ name, email, password });
    await newUser.save();
    return 'Account has been activated!';
  }

  findOne(id: string): Promise<User | null> {
    return this.userModel.findById(id).select('-password').exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto)
      .select('-password')
      .exec();
  }

  updateRole(id: string, role: number) {
    return this.userModel
      .findByIdAndUpdate(id, { role })
      .select('-password')
      .exec();
  }

  async addToCart(id: string, cart: Array<any>) {
    const user = await this.userModel
      .findByIdAndUpdate(id, { cart }, { new: true })
      .select('-password')
      .exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async resetPassword(id: string, newPassword: string) {
    const passwordHash = await bcrypt.hash(newPassword, 12);
    return this.userModel
      .findByIdAndUpdate(id, { password: passwordHash })
      .select('-password')
      .exec();
  }

  async forgotPassword(email: string) {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw new NotFoundException('This email is not registered');
    }
    const accessToken = this.generateAccessToken({ id: user._id.toString() });
    const url = `${process.env.CLIENT_URL}/user/reset/${accessToken}`;
    await this.emailService.sendEmail(email, 'Reset your password', url);
    return 'Password reset link sent to your email';
  }

  getAccessToken(cookies: Record<string, string>) {
    const refreshToken = cookies.refreshToken;
    if (!refreshToken) {
      throw new UnauthorizedException('Please login now!');
    }
    try {
      const user = this.jwtService.verify<TokenPayload>(refreshToken, {
        secret: process.env.REFRESH_TOKEN_SECRET,
      });
      const accessToken = this.generateAccessToken(user);
      return { accessToken };
    } catch {
      throw new UnauthorizedException('Please login now!');
    }
  }

  async login(email: string, password: string, res: Response) {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw new NotFoundException('This email is not registered');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new NotFoundException('Password is incorrect');
    }
    const refreshToken = this.generateRefreshToken({ id: user._id.toString() });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/users/refresh',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return 'Login success!';
  }

  logout(res: Response) {
    res.clearCookie('refreshtoken', { path: '/users/refresh' });
    return 'Logged out.';
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id).select('-password').exec();
  }

  private generateAccessToken(user: TokenPayload): string {
    return this.jwtService.sign(
      { id: user.id },
      { secret: process.env.ACCESS_TOKEN_SECRET, expiresIn: '15m' },
    );
  }

  private generateRefreshToken(user: TokenPayload): string {
    return this.jwtService.sign(
      { id: user.id },
      { secret: process.env.REFRESH_TOKEN_SECRET, expiresIn: '7d' },
    );
  }

  private generateActivationToken(user: JwtPayload): string {
    return this.jwtService.sign(user, {
      secret: process.env.ACTIVATION_TOKEN_SECRET,
      expiresIn: '5m',
    });
  }
}

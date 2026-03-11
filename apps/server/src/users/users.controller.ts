import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import type { Request, Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { AdminAuthGuard } from 'src/auth/adminAuth.guard';
import { LogInUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('activation/:id')
  activateEmail(@Param('id') token: string) {
    return this.usersService.activateEmail(token);
  }

  @Post('login')
  login(
    @Body() loginDto: LogInUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.login(loginDto.email, loginDto.password, res);
  }

  @Post('refresh')
  refreshToken(@Req() req: Request) {
    return this.usersService.getAccessToken(req.cookies);
  }

  @Post('forgot')
  forgotPassword(@Body('email') email: string) {
    return this.usersService.forgotPassword(email);
  }

  @UseGuards(AuthGuard)
  @Post('reset/:id')
  resetPassword(
    @Param('id') id: string,
    @Body() resetDto: { password: string },
  ) {
    return this.usersService.resetPassword(id, resetDto.password);
  }

  @Get('logout')
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.usersService.logout(res);
  }

  @UseGuards(AuthGuard)
  @Patch('addCart/:id')
  addCart(@Param('id') id: string, @Body() cartDto: { cart: Array<any> }) {
    return this.usersService.addToCart(id, cartDto.cart);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard, AdminAuthGuard)
  @Patch('update/:id')
  updateRole(@Param('id') id: string, @Body() roleDto: { role: number }) {
    return this.usersService.updateRole(id, roleDto.role);
  }

  @UseGuards(AuthGuard, AdminAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}

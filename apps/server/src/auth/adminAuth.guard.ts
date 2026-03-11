import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

interface AuthenticatedRequest extends Request {
  user?: { id: string };
}

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private usersService: UsersService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    if (!request.user) {
      return false;
    }
    const user: User | null = await this.usersService.findOne(request.user.id);
    if (!user || user.role !== 1) {
      return false;
    }
    return true;
  }
}

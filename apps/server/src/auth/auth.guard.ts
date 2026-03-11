import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

interface JwtPayload {
  [key: string]: any;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token =
      this.extractTokenFromHeader(request) ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YjE2OTVlMmI5NzU2ZGRmN2E5YTg2NCIsImlhdCI6MTc3MzIzNjgxNywiZXhwIjoxNzczMjM3NzE3fQ.9qMUgdIcdnb8GJUDHJRu7Rw9yQqsc3K1CdY_DPOB9Vs';
    if (!token) {
      throw new UnauthorizedException('Not authentication token found');
    }
    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token);
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('JWT validation failed');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      return undefined;
    }
    const [type, token] = authHeader.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}

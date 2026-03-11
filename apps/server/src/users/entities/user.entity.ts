import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 0 })
  role: number;

  @Prop({ default: process.env.DEFAULT_AVATAR_URL })
  avatar: string;

  @Prop({ default: [] })
  cart: Array<any>;
}

export const UserSchema = SchemaFactory.createForClass(User);

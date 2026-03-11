import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true, trim: true, unique: true })
  name: string;

  @Prop({ type: Object, required: true })
  image: object;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

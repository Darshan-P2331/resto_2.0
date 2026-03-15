import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  product_id: string;

  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  images: object;

  @IsNotEmpty()
  category: string;
}

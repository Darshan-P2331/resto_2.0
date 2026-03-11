import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const existingCategory = await this.categoryModel
      .findOne({
        name: createCategoryDto.name,
      })
      .exec();
    if (existingCategory) {
      throw new ConflictException('Category with this name already exists');
    }
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findOneAndUpdate({ _id: id }, updateCategoryDto);
  }

  async remove(id: string) {
    const category = await this.categoryModel.findById(id);
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    const productCount = await this.productModel.countDocuments({
      category: id,
    });
    if (productCount > 0) {
      throw new BadRequestException(
        'Cannot delete category with associated products',
      );
    }
    return this.categoryModel.findByIdAndDelete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductModel } from '../../domain/models/products.model';
import { ProductRepository } from '../../domain/repositories/products.repository';

@Injectable()
export class ProductsRepositoryImpl implements ProductRepository {
  constructor(
    @InjectModel(ProductModel)
    private productModel: typeof ProductModel,
  ) {}

  async findAll(): Promise<ProductModel[]> {
    return this.productModel.findAll();
  }

  async findById(id: number): Promise<ProductModel> {
    return this.productModel.findByPk(id);
  }

  async updateStock(id: number, stock: number): Promise<ProductModel> {
    await this.productModel.update({ stock }, { where: { id } });
    return this.productModel.findOne({ where: { id } });
  }
}

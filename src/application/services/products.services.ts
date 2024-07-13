import { Injectable, Inject } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/products.repository';
import { ProductModel } from '../../domain/models/products.model';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async findAll(): Promise<ProductModel[]> {
    return this.productRepository.findAll();
  }

  async findById(id: number): Promise<ProductModel> {
    return this.productRepository.findById(id);
  }

  async updateStock(id: number, stock: number): Promise<ProductModel> {
    return this.productRepository.updateStock(id, stock);
  }
}

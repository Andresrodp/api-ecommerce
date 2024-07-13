import { ProductModel } from '../models/products.model';

export interface ProductRepository {
  findAll(): Promise<ProductModel[]>;
  findById(id: number): Promise<ProductModel>;
  updateStock(id: number, stock: number): Promise<ProductModel>;
}

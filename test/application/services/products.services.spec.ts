import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from '../../../src/application/services/products.services';
import { ProductRepository } from '../../../src/domain/repositories/products.repository';
import { ProductModel } from '../../../src/domain/models/products.model';
import * as SequelizeMock from 'sequelize-mock';

describe('ProductService', () => {
  let service: ProductService;
  let repository: ProductRepository;

  const dbMock = new SequelizeMock();

  // Define el modelo mock
  const ProductMock = dbMock.define('ProductModel', {
    id: 1,
    name: 'Product 1',
    price: 100,
    stock: 10,
  });

  const mockProductRepository = {
    findAll: jest.fn(
      (): Promise<ProductModel[]> => Promise.resolve([ProductMock.build()]),
    ),
    findById: jest.fn(
      (id: number): Promise<ProductModel> =>
        Promise.resolve(ProductMock.build()),
    ),
    updateStock: jest.fn((id: number, stock: number): Promise<ProductModel> => {
      const product = ProductMock.build();
      product.set('stock', stock);
      return Promise.resolve(product);
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: 'ProductRepository',
          useValue: mockProductRepository,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repository = module.get<ProductRepository>('ProductRepository');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of products', async () => {
    const products = await service.findAll();
    expect(products).toBeInstanceOf(Array);
    expect(products).toHaveLength(1);
    expect(products[0].get('id')).toBe(1);
    expect(repository.findAll).toHaveBeenCalled();
  });

  it('should return a product by id', async () => {
    const id = 1;
    const product = await service.findById(id);
    expect(product.get('id')).toBe(id);
    expect(repository.findById).toHaveBeenCalledWith(id);
  });

  it('should update the stock of a product', async () => {
    const id = 1;
    const newStock = 20;
    const updatedProduct = await service.updateStock(id, newStock);
    expect(updatedProduct.get('stock')).toBe(newStock);
    expect(repository.updateStock).toHaveBeenCalledWith(id, newStock);
  });
});

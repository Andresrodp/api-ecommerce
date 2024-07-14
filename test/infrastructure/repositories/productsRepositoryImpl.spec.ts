import { Test, TestingModule } from '@nestjs/testing';
import { ProductModel } from '../../../src/domain/models/products.model';
import { ProductsRepositoryImpl } from '../../../src/infrastructure/repositories/products.repository.impl';
import { getModelToken } from '@nestjs/sequelize';

describe('ProductsRepositoryImpl', () => {
  let repository: ProductsRepositoryImpl;
  let model: typeof ProductModel;

  const mockProductModel = {
    findAll: jest.fn(),
    findByPk: jest.fn(),
    update: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsRepositoryImpl,
        {
          provide: getModelToken(ProductModel),
          useValue: mockProductModel,
        },
      ],
    }).compile();

    repository = module.get<ProductsRepositoryImpl>(ProductsRepositoryImpl);
    model = module.get<typeof ProductModel>(getModelToken(ProductModel));
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all products', async () => {
      const products = [{ id: 1, name: 'Product 1', stock: 10 }];
      mockProductModel.findAll.mockResolvedValue(products);

      const result = await repository.findAll();
      expect(result).toEqual(products);
      expect(mockProductModel.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('findById', () => {
    it('should return a product by ID', async () => {
      const product = { id: 1, name: 'Product 1', stock: 10 };
      mockProductModel.findByPk.mockResolvedValue(product);

      const result = await repository.findById(1);
      expect(result).toEqual(product);
      expect(mockProductModel.findByPk).toHaveBeenCalledWith(1);
    });
  });

  describe('updateStock', () => {
    it('should update stock and return the updated product', async () => {
      const product = { id: 1, name: 'Product 1', stock: 10 };
      mockProductModel.update.mockResolvedValue([1]);
      mockProductModel.findOne.mockResolvedValue(product);

      const result = await repository.updateStock(1, 20);
      expect(mockProductModel.update).toHaveBeenCalledWith(
        { stock: 20 },
        { where: { id: 1 } },
      );
      expect(mockProductModel.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(result).toEqual(product);
    });
  });
});

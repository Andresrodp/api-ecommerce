import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { ProductService } from '../../application/services/products.services';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.productService.findById(id);
  }

  @Put(':id')
  async updateStock(@Param('id') id: number, @Body() body: { stock: number }) {
    return this.productService.updateStock(id, body.stock);
  }
}

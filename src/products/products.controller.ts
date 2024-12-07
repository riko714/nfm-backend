import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':upc')
  async findByUPC(@Param('upc') upc: string): Promise<Product> {
    return this.productsService.findByUPC(upc);
  }

  @Post()
  async create(@Body() body: Partial<Product>): Promise<Product> {
    return this.productsService.create(body);
  }

  @Put(':PLU_ID')
  async update(@Param('PLU_ID') PLU_ID: string, @Body() body: Partial<Product>): Promise<Product> {
    return this.productsService.update(PLU_ID, body);
  }

  @Delete(':PLU_ID')
  async delete(@Param('PLU_ID') PLU_ID: string): Promise<void> {
    return this.productsService.delete(PLU_ID);
  }
}

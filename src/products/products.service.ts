import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private productRepo: Repository<Product>) {}

  async findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  async findByUPC(upc: string): Promise<Product> {
    return this.productRepo.findOne({ where: { UPC_Code: upc } });
  }

  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepo.create(productData);
    return this.productRepo.save(product);
  }

  async update(PLU_ID: string, productData: Partial<Product>): Promise<Product> {
    await this.productRepo.update({ PLU_ID }, productData);
    return this.productRepo.findOne({ where: { PLU_ID } });
  }

  async delete(PLU_ID: string): Promise<void> {
    await this.productRepo.delete({ PLU_ID });
  }
}

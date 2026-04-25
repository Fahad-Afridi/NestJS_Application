import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,
  ) {}

  create(dto: CreateProductDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: number) {
    const product = await this.repo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  update(id: number, dto: PartialUpdateProductDto) {
    return this.repo.update(id, dto);
  }

  replace(id: number, dto: UpdateProductDto) {
    return this.repo.save({ id, ...dto });
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    return this.repo.remove(product);
  }

  findByCategory(category: string) {
    return this.repo.find({ where: { category } });
  }

  search(keyword: string) {
    return this.repo.find({
      where: { name: ILike(`%${keyword}%`) },
    });
  }

  async toggleActive(id: number) {
    const product = await this.findOne(id);
    product.isActive = !product.isActive;
    return this.repo.save(product);
  }
}
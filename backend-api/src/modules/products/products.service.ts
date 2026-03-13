import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  // Create product with optional variants and images
  async createProduct(dto: CreateProductDto) {
    return await this.prisma.product.create({
      data: {
        name: dto.name,
        description: dto.description,
        basePrice: dto.basePrice,
        categoryId: dto.categoryId,
        variants: dto.variants ? { create: dto.variants } : undefined,
        images: dto.images ? { create: dto.images } : undefined,
      },
      include: {
        category: true,
        variants: true,
        images: true,
      },
    });
  }

  // Find all products
  async findAllProducts() {
    return await this.prisma.product.findMany({
      include: {
        category: true,
        variants: true,
        images: true,
        _count: {
          select: { variants: true, images: true },
        },
      },
    });
  }

  // Find one product by ID
  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        variants: true,
        images: true,
      },
    });
    if (!product)
      throw new NotFoundException(`Product with ID ${id} not found`);
    return product;
  }

  // Update product
  async updateProduct(id: number, dto: UpdateProductDto) {
    await this.findOne(id); // Ensure it exists
    return await this.prisma.product.update({
      where: { id },
      data: {
        name: dto.name,
        description: dto.description,
        basePrice: dto.basePrice,
        categoryId: dto.categoryId,
      },
      include: {
        category: true,
        variants: true,
        images: true,
      },
    });
  }

  // Delete product
  async removeProduct(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return await this.prisma.product.delete({
      where: { id },
    });
  }
}

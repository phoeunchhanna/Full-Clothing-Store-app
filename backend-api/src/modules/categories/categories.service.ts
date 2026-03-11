import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class CategoriesService {
    constructor(private readonly prisma: PrismaService) {}

    //create category
    async createCategory(data:{
        name:string;
        description?:string;
    }) {
        try {
            return await this.prisma.category.create({data})
        } catch (error) {
            if (error.code === 'P2002') {
                throw new ConflictException('Category already exists');
            }
            throw error;
        }
    }

    //find all categories
    async findAllCategories() {
        return await this.prisma.category.findMany({
            include:{
                _count:{
                    select:{
                        products:true
                    }
                }
            }
        });
    }

   //find one 
    async findOne(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: { products: true },
    });
    if (!category) throw new NotFoundException(`Category with ID ${id} not found`);
    return category;
  }

  //update category
  async updateCategory(id:number,data:{name?:string;description?:string}){
    await this.findOne(id); // Ensure it exists
    return await this.prisma.category.update({
        where:{id},
        data,
    });
  }

  //delet category 
  async removeCategory(id:number){
    const category = await this.prisma.category.findUnique({
        where: { id }
    });
    
    if (!category) {
        throw new NotFoundException(`Category with ID ${id} not found`);
    }

    return await this.prisma.category.delete({
        where:{id},
    });
  }
}

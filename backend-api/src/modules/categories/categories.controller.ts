import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
import { updatecategoryDto } from './dto/update-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    @ApiOperation({ summary: 'Create a category' })
    @ApiResponse({ status: 201, description: 'The category has been successfully created.' })
     createCategory(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoriesService.createCategory(createCategoryDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all categories' })
    @ApiResponse({ status: 404, description: 'Categories not found.' })
     getAllCategories() {
        return this.categoriesService.findAllCategories();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a category by id' })
    @ApiResponse({ status: 404, description: 'Category not found.' })
     getCategoryById(@Param('id') id: string) {
        return this.categoriesService.findOne(+id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a category by id' })
    @ApiResponse({ status: 404, description: 'Category not found.' })
     updateCategory(@Param('id') id: string, @Body() updateData: updatecategoryDto) {
        return this.categoriesService.updateCategory(+id, updateData);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a category by id' })
    @ApiResponse({ status: 200, description: 'The category has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Category not found.' })
    async removeCategory(@Param('id', ParseIntPipe) id: number) {
        const deletedcategory = await this.categoriesService.removeCategory(id);
        return {
            message: `Category with ID ${id} was successfully deleted.`,
            category: deletedcategory,
        };
    }
}

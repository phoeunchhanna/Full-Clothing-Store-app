import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
export class CreateProductImageDto {
  @ApiProperty({ example: 'https://example.com/image.jpg' })
  @IsString()
  @IsNotEmpty()
  url: string;
}

export class CreateProductVariantDto {
  @ApiProperty({ example: 'M' })
  @IsString()
  @IsNotEmpty()
  size: string;

  @ApiProperty({ example: 'Red' })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @IsNotEmpty()
  stockQuantity: number;

  @ApiPropertyOptional({ example: 10 })
  @IsNumber()
  @IsOptional()
  price?: number;
}
export class CreateProductDto {
  @ApiProperty({ example: 'Cotton T-Shirt' })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiPropertyOptional({ example: 'A comfortable cotton t-shirt' })
  @IsString()
  @IsOptional()
  description?: string;
  @ApiProperty({ example: 19.99 })
  @IsNumber()
  @IsNotEmpty()
  basePrice: number;
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;
  @ApiPropertyOptional({ type: [CreateProductVariantDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductVariantDto)
  @IsOptional()
  variants?: CreateProductVariantDto[];
  @ApiPropertyOptional({ type: [CreateProductImageDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductImageDto)
  @IsOptional()
  images?: CreateProductImageDto[];
}

import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): any {
    return {
      message: 'List of products',
    };
  }

  @Post()
  createProduct(): any {
    return {
      message: 'Product created',
    };
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string): any {
    return {
      message: `Product deleted with ID ${id}`,
    };
  }

  @Patch('/:id')
  updateProduct(@Param('id') id: string): any {
    return {
      message: `Product updated with ID ${id}`,
    };
  }
}

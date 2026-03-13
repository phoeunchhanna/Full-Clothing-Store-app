import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductImagesModule } from './modules/product-images/product-images.module';
import { ProductVariantsModule } from './modules/product-variants/product-variants.module';
import { CartItemsModule } from './modules/cart-items/cart-items.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';

@Module({
  imports: [AuthModule, UsersModule, CategoriesModule,ProductsModule, ProductImagesModule, ProductVariantsModule, CartItemsModule, OrdersModule, OrderItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

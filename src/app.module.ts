import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerModel } from './domain/models/customers.model';
import { ProductModel } from './domain/models/products.model';
// import { ProductRepository } from './domain/repositories/products.repository';
import { ProductsController } from './infrastructure/controllers/products.controller';
import { ProductsRepositoryImpl } from './infrastructure/repositories/products.repository.impl';
import { ProductService } from './application/services/products.services';
import { TransactionModel } from './domain/models/transactions.model';
import { DeliveryModel } from './domain/models/deliveries.model';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configModule: ConfigService) => ({
        dialect: 'postgres',
        host: configModule.get<string>('DB_HOST'),
        port: configModule.get<number>('DB_PORT'),
        username: configModule.get<string>('DB_USERNAME'),
        password: configModule.get<string>('DB_PASSWORD'),
        database: configModule.get<string>('DB_DATABASE'),
        models: [CustomerModel, ProductModel, TransactionModel, DeliveryModel],
        autoLoadModels: true,
      }),
      inject: [ConfigService],
    }),
    SequelizeModule.forFeature([
      CustomerModel,
      ProductModel,
      TransactionModel,
      DeliveryModel,
    ]),
  ],
  controllers: [ProductsController],
  providers: [
    ProductService,
    { provide: 'ProductRepository', useClass: ProductsRepositoryImpl },
  ],
})
export class AppModule {}

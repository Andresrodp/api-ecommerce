import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './domain/models/customers.model';
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
        models: [Customer],
        autoLoadModels: true,
      }),
      inject: [ConfigService],
    }),
    SequelizeModule.forFeature([Customer]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

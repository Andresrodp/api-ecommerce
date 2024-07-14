import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  HasOne,
} from 'sequelize-typescript';
import { DeliveryModel } from './deliveries.model';

@Table({
  tableName: 'products',
  timestamps: true,
})
export class ProductModel extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.CHAR(100),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  image_url: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stock: number;
}

import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { CustomerModel } from './customers.model';
import { ProductModel } from './products.model';
@Table({
  tableName: 'deliveries',
  timestamps: true,
})
export class DeliveryModel extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => CustomerModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  product_id: number;

  @BelongsTo(() => ProductModel)
  customer: ProductModel;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  delivery_date: Date;

  @Column({
    type: DataType.CHAR(50),
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.CHAR(50),
    allowNull: false,
  })
  department: string;

  @Column({
    type: DataType.CHAR(50),
    allowNull: false,
  })
  country: string;

  @Column({
    type: DataType.CHAR(200),
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  status: string;
}

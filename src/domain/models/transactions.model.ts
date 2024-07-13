import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { ProductModel } from './products.model';
import { CustomerModel } from './customers.model';

@Table({
  tableName: 'transactions',
  timestamps: true,
})
export class TransactionModel extends Model {
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
  })
  product_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  transaction_date: Date;

  @Column({
    type: DataType.CHAR(50),
    allowNull: false,
  })
  status: string;
}

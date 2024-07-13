import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'deliveries',
  timestamps: true,
})
export class Delivery extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;

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

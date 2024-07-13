import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'customers',
  timestamps: true,
})
export class CustomerModel extends Model {
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
    type: DataType.CHAR(100),
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.CHAR(150),
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.CHAR(50),
    allowNull: false,
  })
  document: string;

  @Column({
    type: DataType.CHAR(18),
    allowNull: false,
  })
  phone_number: string;

  @Column({
    type: DataType.CHAR(50),
    allowNull: false,
  })
  country: string;

  @Column({
    type: DataType.CHAR(50),
    allowNull: false,
  })
  department: string;

  @Column({
    type: DataType.CHAR(50),
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  credit_card: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  last_four_digits: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  expiration_date: Date;
}

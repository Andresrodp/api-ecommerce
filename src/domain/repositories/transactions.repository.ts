import { TransactionModel } from '../models/transactions.model';

export interface TransactionRepository {
  create(transaction: TransactionModel): Promise<TransactionModel>;
  findById(id: number): Promise<TransactionModel>;
  findByCustomerId(customer_id: number): Promise<TransactionModel[]>;
  updateStatus(id: number, status: string): Promise<TransactionModel>;
}

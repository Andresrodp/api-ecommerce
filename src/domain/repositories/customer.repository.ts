import { CustomerModel } from '../models/customers.model';

export interface CustomerRepository {
  create(customer: CustomerModel): Promise<CustomerModel>;
  findByEmail(email: string): Promise<CustomerModel>;
  findById(id: number): Promise<CustomerModel>;
  update(customer: CustomerModel): Promise<CustomerModel>;
  delete(id: number): Promise<void>;
}

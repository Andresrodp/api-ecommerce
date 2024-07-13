import { DeliveryModel } from '../models/deliveries.model';

export interface DeliveryRepository {
  create(delivery: DeliveryModel): Promise<DeliveryModel>;
  findById(id: number): Promise<DeliveryModel>;
  findByCustomerId(customer_id: number): Promise<DeliveryModel[]>;
  updateStatus(id: number, status: string): Promise<DeliveryModel>;
}

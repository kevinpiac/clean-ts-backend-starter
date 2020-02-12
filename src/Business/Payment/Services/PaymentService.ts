import { CustomerEntity } from "../Entities/CustomerEntity";

export interface PaymentService {
  createCustomer(options?: any): Promise<CustomerEntity>;
}

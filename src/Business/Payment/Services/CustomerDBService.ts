import { CustomerEntity } from "../Entities/CustomerEntity";

export interface CustomerDBService {
  upsertCustomer(customer: CustomerEntity): Promise<CustomerEntity>;
}

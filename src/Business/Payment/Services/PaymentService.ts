import { CustomerEntity } from "../Entities/CustomerEntity";
import { CreateCustomerRequest } from "../Usecases/CreateCustomer/CreateCustomerRequest";

export interface PaymentService {
  createCustomerIfNotExist(request: CreateCustomerRequest): Promise<CustomerEntity>;
  updateCustomerById(customerId: string, customer: CustomerEntity): Promise<CustomerEntity>;
}

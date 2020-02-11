import { PaymentService } from "src/Business/Payment/Services/PaymentService";
import { CreateCustomerRequest } from "src/Business/Payment/Usecases/CreateCustomer/CreateCustomerRequest";
import { CustomerEntity } from "../Entities/CustomerEntity";

export class DummyPaymentProviderAdapter implements PaymentService {
  async updateCustomerById(customerId: string, customer: CustomerEntity) {
    console.log('Dummy updating customer by id...', customerId, customer);
    await Promise.resolve(true);
    return new CustomerEntity();
  }
  async createCustomerIfNotExist(request: CreateCustomerRequest) {
    console.log('Dummy Creating Customer with email...', request.email);
    await Promise.resolve(true);
    return new CustomerEntity();
  }
}

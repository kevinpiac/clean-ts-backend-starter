import { PaymentService } from "src/Business/Payment/Services/PaymentService";
import { CreateCustomerRequest } from "src/Business/Payment/Usecases/CreateCustomer/CreateCustomerRequest";
import { CustomerEntity } from "src/Business/Payment/Entities/CustomerEntity";

export class DummyPaymentProviderAdapter implements PaymentService {
  async createCustomerIfNotExist(request: CreateCustomerRequest) {
    console.log('Dummy Creating Customer with email...', request.email);
    await Promise.resolve(true);
    return new CustomerEntity();
  }
}

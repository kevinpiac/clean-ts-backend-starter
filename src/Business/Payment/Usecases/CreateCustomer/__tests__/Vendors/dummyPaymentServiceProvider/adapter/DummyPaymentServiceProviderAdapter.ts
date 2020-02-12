import { PaymentService } from "src/Business/Payment/Services/PaymentService";
import { CustomerEntity } from "src/Business/Payment/Entities/CustomerEntity";

export class DummyPaymentServiceProviderAdapter implements PaymentService {
  createCustomer(_options?: any): Promise<CustomerEntity> {
    const c = new CustomerEntity({ userId: 'userId', customerId: 'customerId', email: 'email' });
    return Promise.resolve(c);
  }
}

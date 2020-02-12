import { CustomerDBService } from "src/Business/Payment/Services/CustomerDBService";
import { CustomerEntity } from "src/Business/Payment/Entities/CustomerEntity";

export class DummyCustomerServiceProviderAdapter implements CustomerDBService {
  constructor() {}

  async upsertCustomer(customer: CustomerEntity): Promise<CustomerEntity> {
    return Promise.resolve(customer);
  }
}

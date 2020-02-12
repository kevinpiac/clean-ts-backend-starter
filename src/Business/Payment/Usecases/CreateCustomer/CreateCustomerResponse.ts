import { CustomerEntity } from "../../Entities/CustomerEntity";

export class CreateCustomerResponse {
    constructor(public data: {
      httpCode: number,
      userId: string,
      customerId: string,
    }) {}

    static buildFromCustomer(customer: CustomerEntity) {
      return new CreateCustomerResponse({
        httpCode: 200,
        userId: customer.getUserId(),
        customerId: customer.getCustomerId(),
      });
    }

    getUserId() {
      return this.data.userId;
    }

    getCustomerId() {
      return this.data.customerId;
    }

    getHTTPCode() {
      return this.data.httpCode;
    }
}

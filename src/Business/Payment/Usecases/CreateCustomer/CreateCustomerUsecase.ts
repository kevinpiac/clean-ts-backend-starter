import { CreateCustomerRequest } from "./CreateCustomerRequest";
import { CreateCustomerResponse } from "./CreateCustomerResponse";
import { CreateCustomerPresenter } from "./CreateCustomerPresenter";
import { PaymentService } from "../../Services/PaymentService";
import { CustomerEntity } from "../../Entities/CustomerEntity";

export class CreateCustomer {
    constructor(public paymentService: PaymentService) {}

    async execute(createCustomerRequest: CreateCustomerRequest, createCustomerPresenter: CreateCustomerPresenter): Promise<any> {

      const customer: CustomerEntity = await this.paymentService.createCustomerIfNotExist(createCustomerRequest);
      const response = new CreateCustomerResponse(customer);

      return createCustomerPresenter.present(response);
    }
}

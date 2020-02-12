import { CreateCustomerRequest } from "./CreateCustomerRequest";
import { CreateCustomerResponse } from "./CreateCustomerResponse";
import { CreateCustomerPresenter } from "./CreateCustomerPresenter";
import { PaymentService } from "../../Services/PaymentService";
import { CustomerEntity } from "../../Entities/CustomerEntity";
import { CustomerDBService } from "../../Services/CustomerDBService";

export class CreateCustomerUsecase {
    constructor(
      public paymentService: PaymentService,
      public customerDBService: CustomerDBService,
    ) {}

    async execute(request: CreateCustomerRequest, presenter: CreateCustomerPresenter): Promise<any> {
      const customer: CustomerEntity = await this.paymentService.createCustomer(request);
      await this.customerDBService.upsertCustomer(customer);
      const response = CreateCustomerResponse.buildFromCustomer(customer);
      return presenter.present(response);
    }
}

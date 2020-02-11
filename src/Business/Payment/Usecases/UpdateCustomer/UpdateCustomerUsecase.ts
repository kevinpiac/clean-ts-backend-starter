import { UpdateCustomerRequest } from "./UpdateCustomerRequest";
import { UpdateCustomerResponse } from "./UpdateCustomerResponse";
import { UpdateCustomerPresenter } from "./UpdateCustomerPresenter";
import { PaymentService } from "../../Services/PaymentService";

export class UpdateCustomer {
    constructor(public paymentService: PaymentService) {}

    async execute(request: UpdateCustomerRequest, presenter: UpdateCustomerPresenter): Promise<any> {
      await this.paymentService.updateCustomerById(request.customerId, request.customerData);
      const response = new UpdateCustomerResponse();
      return presenter.present(response);
    }
}

import { CreateCustomerPresenter } from "src/Business/Payment/Usecases/CreateCustomer/CreateCustomerPresenter";
import { CreateCustomerResponse } from "src/Business/Payment/Usecases/CreateCustomer/CreateCustomerResponse";

export class CreateCustomerPresenterJSON implements CreateCustomerPresenter {
  present(response: CreateCustomerResponse): any {
    return {
      response
    }
  }
}

import { UpdateCustomerPresenter } from "src/Business/Payment/Usecases/UpdateCustomer/UpdateCustomerPresenter";
import { UpdateCustomerResponse } from "src/Business/Payment/Usecases/UpdateCustomer/UpdateCustomerResponse";

export class UpdateCustomerPresenterJSON implements UpdateCustomerPresenter {
  present(response: UpdateCustomerResponse): any {
    return {
      response
    }
  }
}

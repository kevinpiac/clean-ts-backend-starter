import { CreateCustomerPresenter } from "../../../CreateCustomerPresenter";

export class DummyCreateCustomerPresenter implements CreateCustomerPresenter {
  present(createCustomerResponse) {
    return createCustomerResponse;
  }
}

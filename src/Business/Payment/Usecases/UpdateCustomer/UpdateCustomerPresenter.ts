import { UpdateCustomerResponse } from "./UpdateCustomerResponse";

export interface UpdateCustomerPresenter {
    present(updateCustomerResponse: UpdateCustomerResponse): any;
}

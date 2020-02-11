import { CreateCustomerResponse } from "./CreateCustomerResponse";

export interface CreateCustomerPresenter {
    present(CreateCustomerResponse: CreateCustomerResponse): any;
}

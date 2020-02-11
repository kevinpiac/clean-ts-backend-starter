import { CreateCustomerResponse } from "./CreateCustomerResponse";

export interface CreateCustomerPresenter {
    present(createCustomerResponse: CreateCustomerResponse): any;
}

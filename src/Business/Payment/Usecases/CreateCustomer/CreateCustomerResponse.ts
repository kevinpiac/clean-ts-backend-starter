import { CustomerEntity } from "../../Entities/CustomerEntity";

export class CreateCustomerResponse {
    constructor(public customer: CustomerEntity) {}
}

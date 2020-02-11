import { CreateCustomerRequest } from "./CreateCustomerRequest";
import { CreateCustomerResponse } from "./CreateCustomerResponse";
import { CreateCustomerPresenter } from "./CreateCustomerPresenter";

export class CreateCustomer {
    constructor(/* Use dependency injection there */) {}

    async execute(CreateCustomerRequest: CreateCustomerRequest, CreateCustomerPresenter: CreateCustomerPresenter): Promise<any> {

      /* Example :
        const user: UserEntity = registerRequest.user;

        this.userService.saveUser(user);
        this.emailService.sendAnEmail(user.email);

        const response = new RegisterResponse(user);
      */
      const response = "your_response_class";
      return CreateCustomerPresenter.present(response);
    }
}

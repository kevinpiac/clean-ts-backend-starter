---
to: src/Business/Usecases/<%= Name %>/<%= Name %>Usecase.ts/
---
import { <%= Name %>Request } from "./<%= Name %>Request";
import { <%= Name %>Response } from "./<%= Name %>Response";
import { <%= Name %>Presenter } from "./<%= Name %>Presenter";

export class <%= Name %> {
    constructor(/* Use dependency injection there */) {}

    async execute(<%= name %>Request: <%= Name %>Request, <%= name %>Presenter: <%= Name %>Presenter): Promise<any> {

      /* Example :
        const user: UserEntity = registerRequest.user;

        this.userService.saveUser(user);
        this.emailService.sendAnEmail(user.email);

        const response = new RegisterResponse(user);
      */
      const response = "your_response_class";
      return <%= name %>Presenter.present(response);
    }
}

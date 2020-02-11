---
to: src/Business/<%= Domain %>/Usecases/<%= Name %>/<%= Name %>Usecase.ts/
---
import { <%= Name %>Request } from "./<%= Name %>Request";
import { <%= Name %>Response } from "./<%= Name %>Response";
import { <%= Name %>Presenter } from "./<%= Name %>Presenter";

export class <%= Name %>Usecase {
    constructor(/* Use dependency injection there */) {}

    async execute(request: <%= Name %>Request, presenter: <%= Name %>Presenter): Promise<any> {

      /* Example :
        const user: UserEntity = registerRequest.user;

        this.userService.saveUser(user);
        this.emailService.sendAnEmail(user.email);

        const response = new RegisterResponse(user);
      */
      if (!request) {
        console.log('OMG!');
      }
      const response = new <%= Name %>Response();
      return presenter.present(response);
    }
}

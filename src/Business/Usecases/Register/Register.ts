import { RegisterRequest } from "./RegisterRequest";
import { UserEntity } from "src/Business/Entities/User/UserEntity";
import { RegisterResponse } from "./RegisterResponse";
import { RegisterPresenter } from "./RegisterPresenter";

export class Register {
    constructor(public userService: UserService, public emailService: EmailService) {}

    async execute(registerRequest: RegisterRequest, registerPresenter: RegisterPresenter) {

      const user: UserEntity = registerRequest.user;

      this.userService.saveUser(user);
      this.emailService.sendAnEmail(user.email);

      const response = new RegisterResponse(user);
      registerPresenter.present(response);
    }
}

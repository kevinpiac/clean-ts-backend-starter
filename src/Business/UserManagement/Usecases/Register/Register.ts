import { RegisterRequest } from "./RegisterRequest";
import { UserEntity } from "src/Business/UserManagement/Entities/User/UserEntity";
import { RegisterResponse } from "./RegisterResponse";
import { RegisterPresenter } from "./RegisterPresenter";
import { UserService } from "src/Business/UserManagement/Services/UserService/UserService";
import { EmailService } from "src/Business/UserManagement/Services/EmailService/EmailService";

export class Register {
    constructor(public userService: UserService, public emailService: EmailService) {}

    async execute(registerRequest: RegisterRequest, registerPresenter: RegisterPresenter): Promise<any> {

      const user: UserEntity = registerRequest.user;

      this.userService.saveUser(user);
      this.emailService.sendAnEmail(user.email);

      const response = new RegisterResponse(user);
      return registerPresenter.present(response);
    }
}

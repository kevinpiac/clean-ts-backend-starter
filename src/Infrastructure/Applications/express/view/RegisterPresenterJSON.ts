import { RegisterPresenter } from "src/Business/User/Usecases/Register/RegisterPresenter";
import { RegisterResponse } from "src/Business/User/Usecases/Register/RegisterResponse";

export class RegisterPresenterJSON implements RegisterPresenter {
  present(registerResponse: RegisterResponse): any {
    return {
      name: registerResponse.user.name,
    }
  }
}

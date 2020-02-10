import { RegisterPresenter } from "src/Business/Usecases/Register/RegisterPresenter";
import { RegisterResponse } from "src/Business/Usecases/Register/RegisterResponse";

export class RegisterPresenterJSON implements RegisterPresenter {
  present(registerResponse: RegisterResponse): any {
    return {
      name: registerResponse.user.name,
    }
  }
}

import { RegisterResponse } from "./RegisterResponse";

export interface RegisterPresenter {
    present(registerResponse: RegisterResponse): any;
}

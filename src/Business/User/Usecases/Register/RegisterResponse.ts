import { UserEntity } from "src/Business/User/Entities/User/UserEntity";

export class RegisterResponse {
    constructor(public user: UserEntity) {}
}

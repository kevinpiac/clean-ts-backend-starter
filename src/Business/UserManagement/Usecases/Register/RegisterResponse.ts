import { UserEntity } from "src/Business/Entities/User/UserEntity";

export class RegisterResponse {
    constructor(public user: UserEntity) {}
}

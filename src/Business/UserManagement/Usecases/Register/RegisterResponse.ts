import { UserEntity } from "src/Business/UserManagement/Entities/User/UserEntity";

export class RegisterResponse {
    constructor(public user: UserEntity) {}
}

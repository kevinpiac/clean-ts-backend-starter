import { UserEntity } from "src/Business/UserManagement/Entities/User/UserEntity";

export class RegisterRequest {
  constructor(public user: UserEntity) {}
}

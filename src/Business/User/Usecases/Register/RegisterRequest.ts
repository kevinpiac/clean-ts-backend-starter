import { UserEntity } from "src/Business/User/Entities/User/UserEntity";

export class RegisterRequest {
  constructor(public user: UserEntity) {}
}

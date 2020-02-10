import { UserEntity } from "src/Business/Entities/User/UserEntity";

export class RegisterRequest {
  constructor(public user: UserEntity) {}
}

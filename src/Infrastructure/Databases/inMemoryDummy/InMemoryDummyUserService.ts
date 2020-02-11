import { UserEntity } from "src/Business/Entities/User/UserEntity";
import { UserService } from "src/Business/Services/UserService/UserService";

export class InMemoryDummyUserService implements UserService {

    public savedUserInMemory: UserEntity;

    saveUser(user: UserEntity) {
      console.log('User Saved In Memory!');
      this.savedUserInMemory = user;
    }
}

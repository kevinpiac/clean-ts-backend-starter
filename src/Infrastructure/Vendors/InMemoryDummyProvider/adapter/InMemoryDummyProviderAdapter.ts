import { UserService } from "src/Business/User/Services/UserService/UserService";

export class InMemoryDummyProviderAdapter implements UserService {
  saveUser(user: any): void {
    console.log('User Saved!', user);
  }
}

export class InMemoryDummyUserService implements UserService {

    public savedUserInMemory: UserEntity;

    saveUser(user: UserEntity) {
      console.log('User Saved In Memory!');
      this.savedUserInMemory = user;
    }
}

import { UserEntity } from 'src/Business/User/Entities/User/UserEntity';

export interface UserService {
    saveUser(user: UserEntity): void;
}

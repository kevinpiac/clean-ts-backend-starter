import { UserEntity } from 'src/Business/Entities/User/UserEntity';

export interface UserService {
    saveUser(user: UserEntity): void;
}

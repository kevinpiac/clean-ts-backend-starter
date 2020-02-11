import { UserEntity } from 'src/Business/UserManagement/Entities/User/UserEntity';

export interface UserService {
    saveUser(user: UserEntity): void;
}

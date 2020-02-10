import { InMemoryDummyUserService } from "src/Infrastructure/Databases/inMemoryDummy/InMemoryDummyUserService";
import { DummyEmailService } from "src/Infrastructure/Vendors/dummyEmailService/dummyEmailService";
import { Register } from "src/Business/Usecases/Register/Register";
import { RegisterRequest } from "src/Business/Usecases/Register/RegisterRequest";
import { UserEntity } from "src/Business/Entities/User/UserEntity";
import { RegisterPresenterJSON } from "../view/RegisterPresenterJSON";

const userService = new InMemoryDummyUserService();
const emailService = new DummyEmailService();

const registerUsecase = new Register(userService, emailService);

module.exports = {
  '': {
    post: (_:any, res) => {

      const request = new RegisterRequest(new UserEntity('kevin@gmail.com', 'kevin'));
      const presenter = new RegisterPresenterJSON();

      registerUsecase.execute(request, presenter);

      res.ok({ health: 'OK' });
    },
  },
};

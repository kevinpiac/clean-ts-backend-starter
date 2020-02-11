import { Register } from "src/Business/User/Usecases/Register/Register";
import { RegisterRequest } from "src/Business/User/Usecases/Register/RegisterRequest";
import { UserEntity } from "src/Business/User/Entities/User/UserEntity";
import { RegisterPresenterJSON } from "../view/RegisterPresenterJSON";
import { DummyEmailProviderAdapter } from "src/Infrastructure/Vendors/DummyEmailProvider/adapter/DummyEmailProviderAdapter";
import { InMemoryDummyProviderAdapter } from "src/Infrastructure/Vendors/InMemoryDummyProvider/adapter/InMemoryDummyProviderAdapter";

const userService = new InMemoryDummyProviderAdapter();
const emailService = new DummyEmailProviderAdapter();

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

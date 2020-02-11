import { CreateCustomer } from "src/Business/Payment/Usecases/CreateCustomer/CreateCustomerUsecase";
import { DummyPaymentProviderAdapter } from "src/Infrastructure/Vendors/dummyPaymentProvider/adapter/DummyPaymentProviderAdapter";
import { CreateCustomerRequest } from "src/Business/Payment/Usecases/CreateCustomer/CreateCustomerRequest";
import { CreateCustomerPresenterJSON } from "../view/CreateCustomerPresenterJSON";

const paymentService = new DummyPaymentProviderAdapter();
const createCustomer = new CreateCustomer(paymentService);
const createCustomerPresenterJSON = new CreateCustomerPresenterJSON();

module.exports = {
  '': {
    post: async (req:any, res) => {
      console.log(req.body.email);
      const request = new CreateCustomerRequest(req.body.email);
      await createCustomer.execute(request, createCustomerPresenterJSON);
      res.ok({ health: 'OK' });
    },
  },
};

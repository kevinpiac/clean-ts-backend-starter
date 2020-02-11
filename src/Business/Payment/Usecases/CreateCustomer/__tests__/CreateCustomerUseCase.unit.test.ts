import { CreateCustomer } from "../CreateCustomerUsecase";
import { DummyPaymentProviderAdapter } from "../../../Adapters/DummyPaymentProviderAdapter";
import { CreateCustomerPresenter } from "../CreateCustomerPresenter";
import { CreateCustomerRequest } from "../CreateCustomerRequest";

class Presenter implements CreateCustomerPresenter {
  present(createCustomerResponse) {
    return createCustomerResponse;
  }
}

describe('LOLILOL', () => {
  describe('Sub functions', () => {
    it('Should instanciate', async () => {
      const paymentService = new DummyPaymentProviderAdapter();
      const createCustomer = new CreateCustomer(paymentService);
      const presenter = new Presenter();
      const request = new CreateCustomerRequest('email');
      const res = await createCustomer.execute(request, presenter);
      expect(res).toEqual({ "customer": {} });
    });
  });
});

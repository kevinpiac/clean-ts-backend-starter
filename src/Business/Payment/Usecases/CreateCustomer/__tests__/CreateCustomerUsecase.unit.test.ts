import { CreateCustomerRequest } from "../CreateCustomerRequest";
import { CreateCustomerUsecase } from "../CreateCustomerUsecase";
import { CreateCustomerResponse } from "../CreateCustomerResponse";
import { DummyPaymentServiceProviderAdapter } from "./Vendors/dummyPaymentServiceProvider/adapter/DummyPaymentServiceProviderAdapter";
import { DummyCustomerServiceProviderAdapter } from "./Vendors/dummyCustomerServiceProvider/adapter/DummyCustomerServiceProviderAdapter";
import { DummyCreateCustomerPresenter } from "./Vendors/presenters/DummyCreateCustomerPresenter";

describe('CreateCustomer Usecase', () => {
  describe('Basic', () => {
    it('should return new saved customer entity', async () => {
      const presenter = new DummyCreateCustomerPresenter();
      const request = new CreateCustomerRequest('userId', {
        email: 'user@email.com',
      });
      const paymentService = new DummyPaymentServiceProviderAdapter();
      const customerDBService = new DummyCustomerServiceProviderAdapter();

      const usecase = new CreateCustomerUsecase(
        paymentService,
        customerDBService,
      );
      const res = await usecase.execute(request, presenter);
      const expected = new CreateCustomerResponse({
        httpCode: 200,
        customerId: 'customerId',
        userId: 'userId',
      });
      expect(res).toEqual(expected);
    });
  });
});

---
to: src/Business/<%= Domain %>/Usecases/<%= Name %>/__tests__/<%= Name %>Usecase.unit.test.ts/
---
import { <%= Name %>Presenter } from "../<%= Name %>Presenter";
import { <%= Name %>Request } from "../<%= Name %>Request";
import { <%= Name %>Usecase } from "../<%= Name %>Usecase";

class Presenter implements <%= Name %>Presenter {
  present(<%= name %>Response) {
    return <%= name %>Response;
  }
}

describe('<%= Name %> Usecase', () => {
  describe('Basic', () => {
    it('Should instanciate and execute', async () => {
      const presenter = new Presenter();
      const request = new <%= Name %>Request(); // Change This Part :)
      const usecase = new <%= Name %>Usecase();
      const res = await usecase.execute(request, presenter);
      expect(res).toEqual('something.....');
    });
  });
});

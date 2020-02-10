import { response, ok, error } from './response';

describe('Response Middleware', () => {
  describe('Sub functions', () => {
    it('Should set a status 200 and call res.send with data', () => {
      // We mock res
      const res = {
        status: jest.fn((status) => ({ status })),
        send: jest.fn((data) => ({ data })),
      };
      const someData = { some: 'data' };
      ok(res)(someData);

      // Calls res.status with with 200
      expect(res.status.mock.calls[0][0]).toBe(200);
      // Calls res.send with 'someData'
      expect(res.send.mock.calls[0][0]).toEqual(someData);
    });

    it('Should set an error status and call res.send with all values', () => {
      // We mock res
      const res = {
        status: jest.fn((status) => ({ status })),
        send: jest.fn((data) => ({ data })),
      };
      const errorStatus = 999;
      const errorCode = 'SOME_CODE';
      const errorMessage = 'something';
      error(res)(errorStatus, errorCode, errorMessage);

      // Calls res.status with with 200
      expect(res.status.mock.calls[0][0]).toBe(errorStatus);
      const expectedResponse = {
        status: errorStatus,
        code: errorCode,
        message: errorMessage,
      };
      // Calls res.send with 'someData'
      expect(res.send.mock.calls[0][0]).toEqual(expectedResponse);
    });
  });
  describe('Implementation', () => {
    it('Should set res.ok = ok()', () => {
      const res = { ok: undefined };

      response(null, res, () => null);
      expect(res.ok).toBeDefined();
    });

    it('Should set res.error = error()', () => {
      const res = { error: undefined };

      response(null, res, () => null);
      expect(res.error).toBeDefined();
    });

    it('Should call next() without any arg', () => {
      const next = jest.fn(() => null);
      response(null, {}, next);
      expect(next.mock.calls.length).toBe(1);
      // @ts-ignore
      expect(next.mock.calls[0][0]).not.toBeDefined();
    });
  });

});

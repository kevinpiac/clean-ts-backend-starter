type createCustomerRequestOptions = {
  email?: string,
}

export class CreateCustomerRequest {
  constructor(public userId: string, public options?: createCustomerRequestOptions) {}
}

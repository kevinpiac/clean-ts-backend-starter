export class CustomerEntity {
  constructor(public data: {
    userId: string,
    customerId: string,
    email?: string,
  }) {};

  getUserId() {
    return this.data.userId;
  }

  getCustomerId() {
    return this.data.customerId;
  }
}

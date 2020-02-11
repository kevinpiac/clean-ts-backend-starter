import { EmailService } from "src/Business/User/Services/EmailService/EmailService";

export class DummyEmailProviderAdapter implements EmailService {
  sendAnEmail(email: string): void {
    console.log('Email Sent!', email);
  }
}

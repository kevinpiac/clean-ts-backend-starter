import { EmailService } from "src/Business/UserManagement/Services/EmailService/EmailService";

export class DummyEmailProviderAdapter implements EmailService {
  sendAnEmail(email: string): void {
    console.log('Email Sent!', email);
  }
}

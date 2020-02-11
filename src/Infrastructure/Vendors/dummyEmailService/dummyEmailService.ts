import { EmailService } from "src/Business/Services/EmailService/EmailService";

export class DummyEmailService implements EmailService {
    sendAnEmail(email: string) {
      console.log('Email sent to', email);
    }
}

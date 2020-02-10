import admin from 'firebase-admin';
import { Base64 } from 'js-base64';

const base64Credentials = process.env.FIREBASE_ADMIN_CREDENTIALS_B64;

Base64.extendString();

// @ts-ignore
const credentials = JSON.parse(base64Credentials.fromBase64());

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

export default admin;

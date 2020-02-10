// More info: https://firebase.google.com/docs/auth/admin/verify-id-tokens
import admin from 'src/utils/firebase/firebaseAdmin';

export const verifyIdToken = async (req: any, _res: any, next: any) => {
  try {
    const userToken: string = req.get('user-token');
    const decoded = await admin.auth().verifyIdToken(userToken);
    req.userToken = userToken;
    req.userTokenDecoded = decoded;
    req.userId = decoded.uid;
  }
  catch (e) {
    console.log('User Token Verification Failed');
    req.userToken = null;
    req.userTokenDecoded = null;
    req.userId = null;
    req.userTokenError = e;
  }
  next();
};

export default {
  verifyIdToken,
};

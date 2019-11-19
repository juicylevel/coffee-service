import admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://coffee-7be5e.firebaseio.com',
});

export default admin.firestore();
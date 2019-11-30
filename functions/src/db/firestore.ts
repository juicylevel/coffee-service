import admin, { ServiceAccount } from 'firebase-admin';
import serviceAccount from './serviceAccount.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
    databaseURL: 'https://coffee-7be5e.firebaseio.com',
});

export default admin.firestore();
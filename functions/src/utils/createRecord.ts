import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';

export default (docSnap: DocumentSnapshot): Object => ({
    id: docSnap.id,
    ...docSnap.data()
});
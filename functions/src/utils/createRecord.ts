import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';

export default (docSnap: DocumentSnapshot): Object | null => {
    const data = docSnap.data();
    if (!data) {
        return null;
    }
    return ({
        id: docSnap.id,
        ...data
    });
};
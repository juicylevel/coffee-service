import { DocumentSnapshot } from "@google-cloud/firestore";

export default (docSnap: DocumentSnapshot): Object => ({
    id: docSnap.id,
    ...docSnap.data()
});
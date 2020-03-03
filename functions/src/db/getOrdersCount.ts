import { QuerySnapshot } from '@google-cloud/firestore';
import firestore from './firestore';

export default async (accountId: string): Promise<number> => {
    const collection: QuerySnapshot = await firestore
        .collection(`accounts/${accountId}/orders`)
        .get();

    return collection.size;
};
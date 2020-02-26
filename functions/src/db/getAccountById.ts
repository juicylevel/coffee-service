import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
import { Account } from '../entities';
import firestore from './firestore';
import { createRecord } from '../utils';

export default async (id: string): Promise<Account | null> => {
    const accountSnap: DocumentSnapshot = await firestore
        .collection('accounts')
        .doc(id)
        .get();
        
    return createRecord(accountSnap) as Account;
};
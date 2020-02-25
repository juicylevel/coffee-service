import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
import { isEmpty } from 'lodash';
import { Account } from '../entities';
import firestore from './firestore';
import { createRecord } from '../utils';

export default async (id: string): Promise<Account | null> => {
    const accountSnap: DocumentSnapshot = await firestore
        .collection('accounts')
        .doc(id)
        .get();

    const account = !isEmpty(accountSnap)
        ? createRecord(accountSnap) as Account
        : null;

    return account;
};
import { Timestamp } from '@google-cloud/firestore';
import { Account, AccountInput } from '../entities';
import { createRecord } from '../utils';
import firestore from './firestore';

export default async (input: AccountInput): Promise<Account> => {
    const { phone } = input;
    const account = await firestore
        .collection('accounts')
        .add({
            createAt: Timestamp.now(),
            phone
        });
    const querySnap = await account.get();
    return createRecord(querySnap) as Account;
};
import { isEmpty } from 'lodash';
import { Account } from '../entities';
import firestore from './firestore';
import { createRecord } from '../utils';

export default async (phone: string): Promise<Account | null> => {
    const accounts = await firestore
        .collection('accounts')
        .where('phone', '==', phone)
        .limit(1)
        .get();

    const accountsList = accounts.docs.map(account => account);
    const account = !isEmpty(accountsList)
        ? createRecord(accountsList[0]) as Account
        : null;
    
    return account;
};
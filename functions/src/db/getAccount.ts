import { first } from 'lodash';
import { Account } from '../entities';
import firestore from './firestore';

export default async (phone: string): Promise<Account> => {
    const accounts = await firestore
        .collection('accounts')
        .where('phone', '==', phone)
        .limit(1)
        .get();

    const accountsList = accounts.docs.map(account => account.data());
    const account = first(accountsList) as Account;
    
    return account;
};
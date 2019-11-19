import { first } from 'lodash';
import firestore from './firestore';
import createDataItems from './createDataItems';

export default async phone => (
    firestore
        .collection('accounts')
        .where('phone', '==', phone)
        .get()
        .then(snap => {
            const accounts = createDataItems(snap);
            return first(accounts);
        })
);
import admin from 'firebase-admin';
import firestore from './firestore';
import createDataItem from './createDataItem';

const { Timestamp } = admin.firestore;

export default async (accountId, isFree) => (
    firestore
        .collection(`accounts/${accountId}/orders`)
        .add({
            createAt: Timestamp.now(),
            isFree
        })
        .then(doc => doc.get())
        .then(snap => createDataItem(snap))
);
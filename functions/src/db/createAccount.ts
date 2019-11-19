import admin from 'firebase-admin';
import firestore from './firestore';
import createDataItem from './createDataItem';

const { Timestamp } = admin.firestore;

export default phone => (
    firestore
        .collection('accounts')
        .add({
            createAt: Timestamp.now(),
            phone
        })
        .then(doc => doc.get())
        .then(snap => createDataItem(snap))
);
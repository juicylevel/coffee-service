import { findIndex } from 'lodash';
import firestore from './firestore';
import createDataItems from './createDataItems';

export default async account => (
    firestore
        .collection(`accounts/${account.id}/orders`)
        .orderBy('createAt', 'desc')
        .limit(5)
        .get()
        .then(snap => {
            const orders = createDataItems(snap).reverse();
            const lastFreeOrderIndex = findIndex(orders, { 
                isFree: true 
            });
            return orders.slice(
                lastFreeOrderIndex + 1, 
                orders.length
            );
        })
);
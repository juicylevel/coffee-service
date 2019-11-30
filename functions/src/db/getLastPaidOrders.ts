import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
import { findIndex } from 'lodash';
import { Account, Order } from '../entities';
import firestore from './firestore';
import { createRecord } from '../utils';

export default async (account: Account): Promise<Array<Order>> => {
    const orders = await firestore
        .collection(`accounts/${account.id}/orders`)
        .orderBy('createAt', 'desc')
        .limit(5)
        .get();

    const ordersList = orders.docs.map(
        (order: DocumentSnapshot) => createRecord(order)
    ) as Order[];
    
    const lastFreeOrderIndex = findIndex(ordersList.reverse(), { 
        isFree: true 
    });

    return ordersList.slice(
        lastFreeOrderIndex + 1, 
        ordersList.length
    );
};
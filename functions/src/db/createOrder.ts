import { Timestamp } from '@google-cloud/firestore';
import { Order } from '../entities';
import { createRecord } from '../utils';
import firestore from './firestore';

export default async (accountId: string, isFree: boolean): Promise<Order> => {
    const order = await firestore
        .collection(`accounts/${accountId}/orders`)
        .add({
            createAt: Timestamp.now(),
            isFree
        });
    const querySnap = await order.get();
    return createRecord(querySnap) as Order;
};
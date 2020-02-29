import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
import { Order } from '../entities';
import firestore from './firestore';
import { createRecord } from '../utils';

export default async (
    accountId: string, 
    limit: number,
    offset: number,
): Promise<Order[]> => {
    const orders = await firestore
        .collection(`accounts/${accountId}/orders`)
        .orderBy('createAt', 'desc')
        .limit(limit)
        .offset(offset)
        .get();

    const ordersList = orders.docs.map(
        (order: DocumentSnapshot) => createRecord(order)
    ) as Order[];

    return ordersList;
};
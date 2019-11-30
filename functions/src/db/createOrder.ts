import { Timestamp } from '@google-cloud/firestore';
import { Order, OrderInput } from '../entities';
import firestore from './firestore';

export default async (input: OrderInput): Promise<Order> => {
    const { accountId, isFree } = input;
    const order = await firestore
        .collection(`accounts/${accountId}/orders`)
        .add({
            createAt: Timestamp.now(),
            isFree
        });
    const querySnap = await order.get();
    return querySnap.data() as Order;
};
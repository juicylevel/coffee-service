import { findIndex } from 'lodash';
import { Account, Order } from '../entities';
import firestore from './firestore';

export default async (account: Account): Promise<Array<Order>> => {
    const orders = await firestore
        .collection(`accounts/${account.id}/orders`)
        .orderBy('createAt', 'desc')
        .limit(5)
        .get();

    const ordersList = orders.docs.map(order => order.data()) as Order[];
    const lastFreeOrderIndex = findIndex(ordersList.reverse(), { 
        isFree: true 
    });

    return ordersList.slice(
        lastFreeOrderIndex + 1, 
        ordersList.length
    );
};
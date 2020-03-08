import { ApolloError } from 'apollo-server-core';
import { OrderInput, Order, Account } from '../entities';
import { getLastPaidOrders, createOrder } from '../db';
import { MAX_PAID_ORDERS } from '../constants';

export default async (
    root: null, 
    args: { input: OrderInput },
    context: { accountId: string }
): Promise<Order[]> => {
    try {
        const { input } = args;
        const accountId = context.accountId || input.accountId;
        const account = { id: accountId } as Account;
        const lastPaidOrders = await getLastPaidOrders(account);
        const num = lastPaidOrders.length + 1;
        const isFree = lastPaidOrders.length === MAX_PAID_ORDERS;
        await createOrder(accountId, num, isFree);
        return getLastPaidOrders(account);
    } catch (error) {
        throw new ApolloError(error);
    }
};
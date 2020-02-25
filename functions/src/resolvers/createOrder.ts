import { ApolloError } from 'apollo-server-core';
import { OrderInput, Order } from '../entities';
import { createOrder } from '../db';

export default async (
    root: null, 
    args: { input: OrderInput },
    context: { accountId: string }
): Promise<Order> => {
    const { accountId } = context;
    const { input: { isFree } } = args;
    try {
        return createOrder(accountId, isFree);
    } catch (error) {
        throw new ApolloError(error);
    }
};
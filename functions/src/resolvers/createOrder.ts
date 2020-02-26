import { ApolloError } from 'apollo-server-core';
import { OrderInput, Order } from '../entities';
import { createOrder } from '../db';

export default async (
    root: null, 
    args: { input: OrderInput },
    context: { accountId: string }
): Promise<Order> => {
    const { input } = args;
    const accountId = context.accountId || input.accountId;
    const { isFree } = input;
    try {
        return createOrder(accountId, isFree);
    } catch (error) {
        throw new ApolloError(error);
    }
};
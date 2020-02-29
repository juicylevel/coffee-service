import { ApolloError } from 'apollo-server-core';
import { Pagination, Order } from '../entities';
import { getOrders } from '../db';

export default async (
    root: null, 
    args: { pagination: Pagination },
    context: { accountId: string }
): Promise<Order[]> => {
    try {
        const { limit, offset } = args.pagination;
        const { accountId } = context;
        if (!accountId) {
            throw 'No required arguments: accountId';
        }
        return getOrders(accountId, limit, offset);
    } catch (error) {
        throw new ApolloError(error);
    }
};
import { ApolloError } from 'apollo-server-core';
import { Pagination, List, Order } from '../entities';
import { getOrders } from '../db';

export default async (
    root: null, 
    args: { pagination: Pagination },
    context: { accountId: string }
): Promise<List> => {
    try {
        const { pagination } = args;
        const { limit, offset } = pagination;
        const { accountId } = context;
        if (!accountId) {
            // TODO throw exception Error type
            throw 'No required context argument: accountId'; 
        }
        const orders: Order[] = await getOrders(
            accountId, 
            limit, 
            offset
        );
        // TODO
        const list: List = {
            pagination,
            items: orders,
            total: 0,
            hasNext: true,
        } as List;
        //
        return list;
    } catch (error) {
        throw new ApolloError(error);
    }
};
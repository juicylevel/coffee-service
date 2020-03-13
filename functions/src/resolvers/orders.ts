import { ApolloError } from 'apollo-server-core';
import { PaginationInput, Pagination, List, Order } from '../entities';
import { getOrders, getOrdersCount } from '../db';

export default async (
    root: null, 
    args: { pagination: PaginationInput },
    context: { accountId: string }
): Promise<List> => {
    try {
        const { pagination } = args;
        const { limit, offset } = pagination;
        const { accountId } = context;
        if (!accountId) {
            // TODO throw exception Error type
            throw new Error('No required context argument: accountId'); 
        }

        const orders: Order[] = await getOrders(
            accountId, 
            limit, 
            offset
        );

        const total: number = await getOrdersCount(accountId);
        const hasNext: boolean = offset + orders.length < total;

        const list: List = {
            pagination: {
                ...pagination,
                total,
                hasNext,
            } as Pagination,
            items: orders,
        } as List;

        return list;
    } catch (error) {
        throw new ApolloError(error);
    }
};
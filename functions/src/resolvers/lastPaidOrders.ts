import { ApolloError } from 'apollo-server-core';
import { Account, Order } from '../entities';
import { getLastPaidOrders } from '../db';

export default async (account: Account): Promise<Array<Order>> => {
    try {
        return getLastPaidOrders(account);
    } catch (error) {
        throw new ApolloError(error);
    }
};
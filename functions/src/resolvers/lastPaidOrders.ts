import { getLastPaidOrders } from '../db';
import { Account, Order } from '../entities';

export default async (account: Account): Promise<Array<Order>> => (
    getLastPaidOrders(account)
);
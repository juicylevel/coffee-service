export { getLastPaidOrders } from 'db';

export default async account => (
    getLastPaidOrders(account)
);
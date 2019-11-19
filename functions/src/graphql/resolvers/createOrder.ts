export { createOrder } from 'db';

export default async (root, { accountId, isFree }) => (
    createOrder(accountId, isFree)
);
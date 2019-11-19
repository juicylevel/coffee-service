import Timestamp from './Timestamp';
import account from './account';
import lastPaidOrders from './lastPaidOrders';
import createAccount from './createAccount';
import createOrder from './createOrder';

export default {
    Timestamp,
    Query: {
        account,
    },
    Account: {
        lastPaidOrders,
    },
    Mutation: {
        createAccount,
        createOrder,
    },
};
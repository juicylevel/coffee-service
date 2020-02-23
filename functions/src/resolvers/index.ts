import Timestamp from './Timestamp';
import account from './account';
import lastPaidOrders from './lastPaidOrders';
import createAccount from './createAccount';
import createOrder from './createOrder';
import login from './login';

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
        login,
    },
};
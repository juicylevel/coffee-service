import Timestamp from './Timestamp';
import account from './account';
import lastPaidOrders from './lastPaidOrders';
import createAccount from './createAccount';
import createOrder from './createOrder';
import login from './login';
import updatePhone from './updatePhone';

export default {
    Timestamp,
    Query: {
        account,
    },
    Account: {
        lastPaidOrders,
    },
    Mutation: {
        login,
        createAccount,
        
        // with context
        createOrder,
        updatePhone,
    },
};
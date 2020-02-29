import Timestamp from './Timestamp';
import account from './account';
import lastPaidOrders from './lastPaidOrders';
import createAccount from './createAccount';
import createOrder from './createOrder';
import login from './login';
import updatePhone from './updatePhone';
import orders from './orders';

export default {
    Timestamp,
    Query: {
        account,
        orders,
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
    Item: {
        // TODO
        __resolveType(obj: Object, context, info) {
            if (obj.hasOwnProperty('isFree')) {
                return 'Order';
            }
            return null;
        },
    },
};
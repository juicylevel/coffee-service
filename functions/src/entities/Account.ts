import { Timestamp } from '@google-cloud/firestore';
import Order from './Order';

export default interface Account {
    id: string;
    reateAt: Timestamp;
    phone: string;
    lastPaidOrders: Array<Order>
};
import { Timestamp } from '@google-cloud/firestore';

export default interface Order {
    id: string;
    createAt: Timestamp;
    num: number;
    isFree: boolean;
};
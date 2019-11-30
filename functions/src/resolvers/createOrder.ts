import { createOrder } from '../db';
import { OrderInput } from '../entities';

export default async (
    root: null, 
    args: { input: OrderInput }
) => (
    createOrder(args.input)
);
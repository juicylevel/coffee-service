import { ApolloError } from 'apollo-server-core';
import { OrderInput } from '../entities';
import { createOrder } from '../db';

export default async (
    root: null, 
    args: { input: OrderInput }
) => {
    try {
        return createOrder(args.input);
    } catch (error) {
        throw new ApolloError(error);
    }
};
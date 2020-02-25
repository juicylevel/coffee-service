import { ApolloError, ValidationError } from 'apollo-server-core';
import { Account } from '../entities';
import { getAccountByPhone } from '../db';

export default async (
    root: null, 
    args: { phone: string }
): Promise<Account> => {
    try {
        const { phone } = args;
        const account = await getAccountByPhone(phone);
        if (!account) {
            throw new ValidationError(`Account by ${phone} not found.`);
        }
        return account;
    } catch (error) {
        throw new ApolloError(error);
    }
};
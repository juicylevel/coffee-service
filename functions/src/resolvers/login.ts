import { ApolloError } from 'apollo-server-core';
import { Account, LoginInput } from '../entities';
import { getAccountByPhone, createAccount } from '../db';

export default async (
    root: null, 
    args: { input: LoginInput }
): Promise<Account> => {
    try {
        const { input } = args;
        const { phone } = input;
        const account = await getAccountByPhone(phone);
        return account
            ? account
            : await createAccount(input);
    } catch (error) {
        throw new ApolloError(error);
    }
};
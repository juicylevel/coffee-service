import { ApolloError } from 'apollo-server-core';
import { oneLine } from 'common-tags';
import { Account } from '../entities';
import { getAccountById, getAccountByPhone } from '../db';

export default async (
    root: null, 
    args,
    context
): Promise<Account> => {
    try {
        const { phone } = args;
        const accountId = context.accountId || args.accountId;
        const loader = accountId ? getAccountById : getAccountByPhone;
        const account = await loader(accountId);
        if (!account) {
            throw new Error(oneLine`
                Account by ${accountId || phone} not found.
            `);
        }
        return account;
    } catch (error) {
        throw new ApolloError(error);
    }
};
import { ApolloError } from 'apollo-server-core';
import { oneLine } from 'common-tags';
import { Account } from '../entities';
import { getAccountById, getAccountByPhone } from '../db';

export default async (
    root: null, 
    args: { id: string, phone: string },
    context: { accountId: string }
): Promise<Account | null> => {
    try {
        const { phone } = args;
        const accountId = context.accountId || args.id;

        let account: Account | null;

        if (accountId) {
            account = await getAccountById(accountId);
        } else if (phone) {
            account = await getAccountByPhone(phone);
        } else {
            // TODO throw exception Error type
            throw new Error('No required arguments: accountId or phone');
        }

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
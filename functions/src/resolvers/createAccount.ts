import { ApolloError } from 'apollo-server-core';
import { oneLine } from 'common-tags';
import { Account, AccountInput } from '../entities';
import { getAccountByPhone, createAccount } from '../db';

export default async (
    root: null, 
    args: { input: AccountInput }
): Promise<Account> => {
    try {
        const { input } = args;
        const { phone } = input;
        const account = await getAccountByPhone(phone);
        if (!account) {
            return await createAccount(input);
        } else {
            // TODO throw exception Error type
            throw new Error(
                oneLine`
                    Account already exist: 
                    ID ${account.id}, 
                    phone ${phone}`
            );
        }
    } catch (error) {
        throw new ApolloError(error);
    }
};
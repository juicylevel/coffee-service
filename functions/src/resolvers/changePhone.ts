import { ApolloError } from 'apollo-server-core';
import { Account, ChangePhoneInput } from '../entities';
import { getAccount, createAccount } from '../db';

export default async (
    root: null, 
    args: { input: ChangePhoneInput }
): Promise<string> => {
    try {
        const { input } = args;
        const { accountId, newPhone } = input;
        const account = await getAccount(phone);
        return account
            ? account
            : await createAccount(input);
    } catch (error) {
        throw new ApolloError(error);
    }
};
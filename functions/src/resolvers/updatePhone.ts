import { ApolloError } from 'apollo-server-core';
import { UpdatePhoneInput, Account } from '../entities';
import { updatePhone, getAccountById } from '../db';

export default async (
    root: null, 
    args: { input: UpdatePhoneInput },
    context: { accountId: string }
): Promise<Account | null> => {
    try {
        const { input } = args;
        const accountId = context.accountId || input.accountId;
        const { newPhone } = input;
        await updatePhone(accountId, newPhone);
        const account = await getAccountById(accountId);
        return account;
    } catch (error) {
        throw new ApolloError(error);
    }
};
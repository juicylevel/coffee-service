import { ApolloError } from 'apollo-server-core';
import { UpdatePhoneInput } from '../entities';
import { updatePhone } from '../db';

export default async (
    root: null, 
    args: { input: UpdatePhoneInput },
    context: { accountId: string }
): Promise<string | null> => {
    const { accountId } = context;
    try {
        const { input } = args;
        const { newPhone } = input;
        return await updatePhone(accountId, newPhone);
    } catch (error) {
        throw new ApolloError(error);
    }
};
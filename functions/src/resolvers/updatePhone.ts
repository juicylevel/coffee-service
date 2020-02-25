import { ApolloError } from 'apollo-server-core';
import { UpdatePhoneInput } from '../entities';
import { updatePhone } from '../db';

export default async (
    root: null, 
    args: { input: UpdatePhoneInput }
): Promise<string | null> => {
    try {
        const { input } = args;
        const { accountId, newPhone } = input;
        return await updatePhone(accountId, newPhone);
    } catch (error) {
        throw new ApolloError(error);
    }
};
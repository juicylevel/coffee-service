import { getAccount, createAccount } from '../db';
import { Account, AccountInput } from '../entities';

export default async (
    root: null, 
    args: { input: AccountInput }
): Promise<Account> => {
    const { input } = args;
    const { phone } = input;
    const account = await getAccount(phone);
    if (!account) {
        return await createAccount(input);
    } else {
        throw new Error(`Account already exist: ID ${account.id}, phone ${phone}`)
    }
};
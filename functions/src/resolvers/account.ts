import { getAccount, createAccount } from '../db';
import { Account, AccountInput } from '../entities';

export default async (
    root: null, 
    args: { phone: string }
): Promise<Account> => {
    const { phone } = args;
    const account = await getAccount(phone);
    if (!account) {
        const input = { phone } as AccountInput;
        return await createAccount(input);
    } else {
        return account;
    }
};
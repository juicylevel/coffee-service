import { getAccount } from '../db';
import { Account } from '../entities';

export default async (
    root: null, 
    args: { phone: string }
): Promise<Account | null> => (
    getAccount(args.phone)
);
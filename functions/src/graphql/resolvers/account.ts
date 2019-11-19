export { getAccount, createAccount } from 'db';

export default async (root, { phone }) => (
    getAccount(phone)
        .then(account => {
            if (!account) {
                return createAccount(phone);
            } else {
                return account;
            }
        })
);
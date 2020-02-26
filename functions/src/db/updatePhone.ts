import firestore from './firestore';

export default async (accountId: string, phone: string): Promise<string> => {
    await firestore
        .collection('accounts')
        .doc(accountId)
        .update({
            phone
        });

    return phone;
};
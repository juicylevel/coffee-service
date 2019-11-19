import admin from 'firebase-admin';
import { GraphQLScalarType } from 'graphql';
import moment from 'moment';

const { Timestamp } = admin.firestore;

export default new GraphQLScalarType({
    name: 'Timestamp',
    description: 'firestore timestamp',
    serialize(value) {
        // value type - Timestamp
        // return iso value sent to the client
        const date = value.toDate();
        return moment(date).format();
    },
    parseValue(value) {
        console.log('parseValue', value);
        // value type - iso string
        // value from the client
        const date = moment(value).toDate();
        return Timestamp.fromDate(date);
    },
    parseLiteral(ast) {
        console.log('parseLiteral', ast);
        return null;
    }
});
import { GraphQLScalarType, ValueNode } from 'graphql';
import moment from 'moment';
import { Timestamp } from '@google-cloud/firestore';

export default new GraphQLScalarType({
    name: 'Timestamp',
    description: 'firestore timestamp',
    serialize(value: Timestamp) {
        // value type - Timestamp
        // return iso value sent to the client
        const date = value.toDate();
        return moment(date).format();
    },
    parseValue(value: string) {
        console.log('parseValue', value);
        // value type - iso string
        // value from the client
        const date = moment(value).toDate();
        return Timestamp.fromDate(date);
    },
    parseLiteral(ast: ValueNode) {
        console.log('parseLiteral', ast);
        return null;
    }
});
import { gql } from 'apollo-server-express';

export default gql`
    scalar Timestamp

    type Account {
        id: String!
        createAt: Timestamp!
        phone: String!
        lastPaidOrders: [Order!]
    }

    type Order {
        id: String!
        createAt: Timestamp!
        isFree: Boolean!
    }

    type Query {
        account(phone: String!): Account
    }

    type Mutation {
        createAccount(phone: String!): Account
        createOrder(accountId: String!, isFree: Boolean!): Order!
    }
`;
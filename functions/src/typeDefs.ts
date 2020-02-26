import { gql } from 'apollo-server-express';

export default gql`
    scalar Timestamp

    type Account {
        id: ID!
        createAt: Timestamp!
        phone: String!
        lastPaidOrders: [Order!]
    }

    type Order {
        id: ID!
        createAt: Timestamp!
        isFree: Boolean!
    }

    type Query {
        account(id: String, phone: String): Account
    }

    type Mutation {
        createAccount(input: AccountInput!): Account
        createOrder(input: OrderInput!): Order!
        login(input: LoginInput!): Account!
        updatePhone(input: UpdatePhoneInput!): String!
    }

    input AccountInput {
        phone: String!
    }

    input OrderInput {
        accountId: ID!
        isFree: Boolean!
    }

    input LoginInput {
        phone: String!
    }

    input UpdatePhoneInput {
        accountId: ID!
        newPhone: String!
    }
`;
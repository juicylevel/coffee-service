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
        # id | phone | accountId from context
        account(id: String, phone: String): Account
    }

    type Mutation {
        createAccount(input: AccountInput!): Account
        # accountId from input | accountId from context
        createOrder(input: OrderInput!): Order!
        login(input: LoginInput!): Account!
        # accountId from input | accountId from context
        updatePhone(input: UpdatePhoneInput!): String!
    }

    input AccountInput {
        phone: String!
    }

    input OrderInput {
        accountId: ID
        isFree: Boolean!
    }

    input LoginInput {
        phone: String!
    }

    input UpdatePhoneInput {
        accountId: ID
        newPhone: String!
    }
`;
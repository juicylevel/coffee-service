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
        # TODO: create currentAccount query and resolver (accountId from context)
        # TODO: account resolver (use only arguments)
    }

    type Mutation {
        createAccount(input: AccountInput!): Account
        # accountId from input | accountId from context
        # TODO: need opts?
        createOrder(input: OrderInput!): Order!
        login(input: LoginInput!): Account!
        # accountId from input | accountId from context
        # TODO: need opts?
        updatePhone(input: UpdatePhoneInput!): Account!
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
import { gql } from 'apollo-server-express';

// TODO: separate schema
export default gql`
    scalar Timestamp

    union Item = Order

    type Pagination {
        limit: Int!
        offset: Int!
    }

    type List {
        pagination: Pagination!
        items: [Item!]
        total: Int!
        hasNext: Boolean!
    }

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
        orders(pagination: PaginationInput!): List!

        # TODO: create currentAccount query and resolver (accountId from context)
        # TODO: account resolver (use only arguments)
    }

    type Mutation {
        createAccount(input: AccountInput!): Account
        # accountId from input | accountId from context
        # TODO: need opts?
        createOrder(input: OrderInput): [Order!]!
        login(input: LoginInput!): Account!
        # accountId from input | accountId from context
        # TODO: need opts?
        updatePhone(input: UpdatePhoneInput!): Account!
    }

    input PaginationInput {
        limit: Int!
        offset: Int!
    }

    input AccountInput {
        phone: String!
    }

    input OrderInput {
        accountId: ID
    }

    input LoginInput {
        phone: String!
    }

    input UpdatePhoneInput {
        accountId: ID
        newPhone: String!
    }
`;
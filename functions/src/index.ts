import * as functions from 'firebase-functions';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    introspection: true,
    context: ({ req }) => {
        const accountId = req.headers.account || null;
        return { accountId };
    }
});

const app = express();

server.applyMiddleware({ 
    app, 
    path: '/', 
    cors: true 
});

export const graphql = functions.https.onRequest(app);
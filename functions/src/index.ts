import * as functions from 'firebase-functions';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from 'graphql';

const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});

const app = express();

server.applyMiddleware({ 
    app, 
    path: '/', 
    cors: true 
});

export const graphql = functions.https.onRequest(app);

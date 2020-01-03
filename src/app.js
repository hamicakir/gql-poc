import express from 'express';
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schemas";
import resolvers from './resolvers'

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen(3030, () => console.log(`🚀 Server ready at http://localhost:3030${server.graphqlPath}`));

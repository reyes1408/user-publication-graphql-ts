// app.ts
import express from "express";
import { ApolloServer } from "apollo-server-express"
import { PingResolver } from "./resolvers/ping"
import { buildSchema } from "type-graphql";

export const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver]
        }),
        context: ({req, res}) => ({req, res})
    });

    await server.start(); // Esperar a que el servidor Apollo se inicie completamente

    server.applyMiddleware({ app, path: '/graphql' });

    return app;
}

'use strict';
require('dotenv').config();
const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const jwt = require('koa-jwt');

const typeDefs = require('./graphql/types');
const resolvers = require('./graphql/resolvers.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ ctx }) => {
    const token = ctx.header.authorisation || '';

    return { token };
  },
});

const app = new Koa();

//app.use(jwt({ secret: 'f1BtnWgD3VKY' }));

server.applyMiddleware({ app, path: '/graphql' });

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening at port ${port}`));

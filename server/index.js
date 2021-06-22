const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const typeDefs = require('./graphql/types');
const resolvers = require('./graphql/reslovers');

const formatResponse = (response, args) => {
  console.log('queryString : ', args.queryString);
  console.log('variables : ', args.variables);
  return response;
};

const server = new ApolloServer({ typeDefs, resolvers, formatResponse });

const app = new Koa();
server.applyMiddleware({ app, path: '/graphql' });

const port = 8080;

app.listen(port, () => console.log(`listening at port ${port}`));

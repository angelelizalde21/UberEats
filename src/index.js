const { ApolloServer } = require('apollo-server');
import mongoose from 'mongoose';

import typeDefs from './graphql/schemas';
import resolvers from './graphql/resolvers';
import { getContext, AuthDirective } from './actions/authActions';

require('dotenv').config();

// Mongoose

const DATABASE  = process.env.NODE_ENV = 'test' ? process.env.TEST_DATABASE : process.env.DATABASE;

mongoose.connect(
  DATABASE,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'Error de conexion'));
mongoDB.on('open', () => console.log('BD conectada !!'));



// GraphQL

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    AuthDirective: AuthDirective
  },
  context: async ({ req }) => getContext(req),
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log('🚀 server is ready at ' + url);
})
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { connectDatabase } from './utils/db.mjs';
import { resolvers } from './resolvers/main.mjs';
// Type Definitions
import { userSchema } from './typeDefs/user.mjs';
import { querySchema } from './typeDefs/query.mjs';
import { mutationSchema } from './typeDefs/mutation.mjs';
import { genericTypes } from './typeDefs/generic.mjs';
import { GraphQLError } from 'graphql';


const server = new ApolloServer({
  typeDefs: [userSchema, querySchema, mutationSchema, genericTypes],
  resolvers
});

connectDatabase()

let queryExceptions = [
  "IntrospectionQuery",
  "signUp",
  "signIn"
]

const { url } = await startStandaloneServer(server, {
  context:
    async ({ req, res }) => {
      // Get the user token from the headers.
      const operationName = req.body.operationName
      const token = req.headers.authorization || '';



      if (!token && queryExceptions.indexOf(operationName) === -1) {
        throw new GraphQLError('User is not authenticated', {
          extensions: {
            code: 'UNAUTHENTICATED',
            http: { status: 401 },
          },
        });
      }


      return {};
    },

});
console.log(`🚀 Server ready at ${url}`);
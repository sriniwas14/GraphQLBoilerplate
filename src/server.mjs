import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { connectDatabase } from './utils/db.mjs';
import { resolvers } from './resolvers/main.mjs';
// Type Definitions
import { userSchema } from './typeDefs/user.mjs';
import { querySchema } from './typeDefs/query.mjs';
import { mutationSchema } from './typeDefs/mutation.mjs';
import { genericTypes } from './typeDefs/generic.mjs';
import authPlugin from './plugins/auth.mjs';

import config from './config.mjs';


const server = new ApolloServer({
  typeDefs: [userSchema, querySchema, mutationSchema, genericTypes],
  resolvers,
  plugins: [
    {
      requestDidStart: ({ contextValue }) => {
        console.log("CVV ", contextValue);
      }
    },
    authPlugin
  ],
});

connectDatabase()

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
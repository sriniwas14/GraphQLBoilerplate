import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectDatabase } from './utils/db.mjs';
import { resolvers } from './resolvers/main.mjs';
import { typeDefs } from './types.mjs';
import { userSchema } from './typeDefs/user.mjs';
import { querySchema } from './typeDefs/query.mjs';
import { mutationSchema } from './typeDefs/mutation.mjs';

const server = new ApolloServer({
  typeDefs: [userSchema, querySchema, mutationSchema],
  resolvers,
});

connectDatabase()

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
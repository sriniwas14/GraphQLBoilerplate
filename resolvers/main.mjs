import authResolvers from './auth.mjs'

export const resolvers = {
    Query: {
        hello: () => 'world',
    },
    Mutation: {
        signIn: authResolvers.signIn
    }
};
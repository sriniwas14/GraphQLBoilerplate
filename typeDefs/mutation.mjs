export const mutationSchema = `#graphql
  type Mutation {
    signUp(email: String!, password: String!, name: String!): User
    signIn(email: String!, password: String!): Auth!
  }
`;
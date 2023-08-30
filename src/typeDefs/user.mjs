export const userSchema = `#graphql
  type User {
    email: String
    name: String
  },

  type Auth {
    token: String!
    success: Boolean
    message: String!
  }
`;
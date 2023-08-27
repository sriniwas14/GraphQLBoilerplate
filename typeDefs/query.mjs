export const querySchema = `#graphql
  type Query {
    hello: String
    user(_id: String): User!
  }
`;
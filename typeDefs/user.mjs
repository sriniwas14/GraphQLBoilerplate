import { Source } from "graphql";

export const userSchema = `#graphql
  type User {
    email: String
    name: String
  },

  type Auth {
    token: String
  }
`;
Source
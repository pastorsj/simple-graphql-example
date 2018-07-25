import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  user(id: Int): User
  users: [User]
  group(id: Int): Group
  groups: [Group]
}

type User {
  id: ID!
  name: String
  email: String
  password: String
  residence: String
  groups: [Group]!
}

type Group {
  id: ID!
  name: String
  members: [User]!
}
`;

export default makeExecutableSchema({ typeDefs, resolvers });

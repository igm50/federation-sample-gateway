import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

new ApolloServer({ typeDefs, resolvers }).listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Store {
    name: String
  }
  
  type Query {
    stores: [Store]
  }
`

const stores = [
  {
    name: 'store 1',
  },
  {
    name: 'store 2',
  },
]

const resolvers = {
  Query: {
    stores: () => stores,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})

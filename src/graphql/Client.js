import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1100/graphql",
  cache: new InMemoryCache(),
});

export default client;

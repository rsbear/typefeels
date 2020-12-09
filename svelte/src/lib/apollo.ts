import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "https://typedb.us-west-2.aws.cloud.dgraph.io/graphql",
  fetch,
});

export default new ApolloClient({
  // Provide required constructor fields
  cache,
  link,
  // Provide some optional constructor fields
  version: "1.3",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

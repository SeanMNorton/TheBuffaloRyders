/* eslint-disable */
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

export default () => {
  const httpLink = createHttpLink({
    uri: "https://us-east-1.cdn.hygraph.com/content/ckn7hgin2dc7w01wag5aq3mqj/master",
  });
  const cache = new InMemoryCache();
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });
  return new VueApollo({
    defaultClient: apolloClient,
  });
};

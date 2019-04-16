import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

export default () => {
  const httpLink = createHttpLink({
    uri: 'https://api-useast.graphcms.com/v1/cjujs990c1g9r01f4jrouqtzz/master',
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

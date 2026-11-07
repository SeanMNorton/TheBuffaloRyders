import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';

export default () => new ApolloClient({
  link: new HttpLink({
    uri: 'https://us-east-1.cdn.hygraph.com/content/ckn7hgin2dc7w01wag5aq3mqj/master',
  }),
  cache: new InMemoryCache(),
});

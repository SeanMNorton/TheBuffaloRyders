import { gql } from 'apollo-boost';

export const GET_URLS = gql`
  query {
    urls {
      url
      siteName
    }
  }
`;

export const GET_SHOWCASE = gql`
  query showcases($where: ShowcaseWhereInput ) {
    showcases: showcases(where: $where) {
      isVideo
      url
      description
    }
  }
`;

export const GET_GIGS = gql`
  query content($first: Int, $where: GigWhereInput, $orderBy: GigOrderByInput) {
    gigs: gigs(first: $first, where: $where, orderBy: $orderBy) {
      artist
      venue
      city
      state
      info
      date
      time
    }
  }
`;

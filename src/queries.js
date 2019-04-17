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

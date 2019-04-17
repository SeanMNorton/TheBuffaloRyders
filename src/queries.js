import { gql } from 'apollo-boost';

export const GET_URLS = gql`
  query {
    urls {
      url
      siteName
    }
  }
`;

// not in use yet
export const GET_SHOWCASE = gql`
  query showCases($where: ShowCaseWhereInput ) {
    showcases: showCases(where: $where) {
      isVideo
      url
      description
    }
  }
`;

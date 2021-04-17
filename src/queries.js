import { gql } from 'apollo-boost';

export const GET_URLS = gql`
  query($where: UrlWhereInput) {
    urls(where: $where) {
      url
      siteName
    }
  }
`;

export const GET_SHOWCASE = gql`
  query($where: ShowcaseWhereInput ) {
    showcases(where: $where) {
      url
      description
    }
  }
`;

export const GET_GIGS = gql`
  query($first: Int, $where: GigWhereInput, $orderBy: GigOrderByInput) {
    gigs(first: $first, where: $where, orderBy: $orderBy) {
      artist
      place
      city
      state
      info
      date
      ticketsUrl
    }
  }
`;

export const GET_ALBUMS = gql`
query($where: AlbumWhereInput, $orderBy: AlbumOrderByInput) {
  albums(where: $where, orderBy: $orderBy) {
      id
      title
      spotify
      itunes
      bandcamp
      releaseDate
      info
      albumCover {
        handle
        url
        fileName
        height
        width
      }
      songs {
        title
        trackNumber
      }
    }
  }
`;

export const GET_METADATA = gql`
query($where: MetaDataWhereInput) {
  metaDatas(where: $where) {
      id
      title
      description
      url
      image {
        handle
      }
      page
    }
  }
`;

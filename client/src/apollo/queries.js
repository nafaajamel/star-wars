import { gql } from '@apollo/client';

const FETCH_PLANETS = gql`
  query GetAll($pageSize: Int, $page: Int) {
    planets(pageSize: $pageSize, page: $page) {
      pagination {
        total
        page
        pageSize
      }
      nodes {
        id
        name
        description
        code
        pictureUrl
        population
        characters {
          id
        }
      }
    }
  }
`;
const GET_CHARACTER = gql`
  query GetCharacter($id: Int!) {
    character(id: $id) {
      id
      name
      description
      bornAt
      pictureUrl
      planet {
        name
      }
      friends {
        name
      }
    }
  }
`;

const FETCH_CHARACTERS = gql`
  query gettCharacters($page: Int, $planet: Int, $pageSize: Int) {
    characters(page: $page, pageSize: $pageSize, planet: $planet) {
      pagination {
        total
        page
        pageSize
      }
      nodes {
        id
        name
        description
        bornAt
        pictureUrl
        planet {
          name
        }
        friends {
          name
        }
      }
    }
  }
`;

export { FETCH_PLANETS, GET_CHARACTER, FETCH_CHARACTERS };

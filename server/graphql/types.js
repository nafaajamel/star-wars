'use strict';
const { gql } = require('apollo-server-koa');

module.exports = gql`
  # query

  type Character {
    id: ID
    name: String!
    description: String!
    bornAt: String!
    pictureUrl: String
    planet: Planet!
    friends(limit: Int): [Character]
  }

  type Planet {
    id: ID
    name: String!
    description: String!
    code: String!
    pictureUrl: String!
    population: Int
    characters(limit: Int): [Character]
  }
  type Pagination {
    total: Int
    page: Int
    pageSize: Int
  }
  type Characters {
    pagination: Pagination
    nodes: [Character]
  }
  type Planets {
    pagination: Pagination
    nodes: [Planet]
  }

  type Query {
    planets(page: Int, pageSize: Int): Planets

    characters(
      page: Int
      pageSize: Int
      planet: Int
      birthDate: String
    ): Characters

    character(id: ID!): Character
  }

  # mutations

  input PlanetIput {
    name: String!
    description: String!
    code: String!
    pictureUrl: String
  }
  input CharacterInput {
    name: String
    description: String
    bornAt: String
    planet: String
    pictureUrl: String
    friends: [Int]
  }

  type Response {
    id: Int
    name: String
  }

  type Mutation {
    createPlanet(planetInfo: PlanetIput): Response
    createCharacter(characterInfo: CharacterInput): Response
    login(email: String!, password: String!): String
  }
`;

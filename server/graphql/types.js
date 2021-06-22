'use strict';
const { gql } = require('apollo-server-koa');

// - `id`
// - `name`: (min: 1 char, max: 20 char)
// - `description`: (min: 15 char, max: 300 char)
// - `code`: with format `AA-AAA-11` (ex: `YX-JGP-91`)
// - `pictureUrl`: url to the picture
// - `population`: number of characters on that planet
// - `characters`: returns the list of characters that live on this planet

// - `id`
// - `name`: (min: 1 char, max: 20 char)
// - `description`: (min: 15 char, max: 300 char)
// - `bornAt`: ISO datetime (e.g: 1970-01-01T00:00:00Z)
// - `pictureUrl`: url to the picture
// - `planet`: The planet the character lives on
// - `friends`: character's friends

module.exports = gql`
  type Character {
    id: ID
    name: String
    description: String!
    bornAt: String
    pictureUrl: String
    planet: String
    friends(limit: Int): [Character]
  }

  type Planet {
    id: ID
    name: String
    description: String!
    code: String
    pictureUrl: String
    population: Int
    characters: [Character]
  }

  type Query {
    planets(page: Int, pageSize: Int): [Planet]
    characters(
      page: Int
      pageSize: Int
      planet: Int
      birthDate: String
    ): [Character]
    character(id: ID): Character
  }
`;

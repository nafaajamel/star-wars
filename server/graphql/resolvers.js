'use strict';
const Character = require('../models/character');
const Planet = require('../models/planet');
const mutations = require('./mutations');
const { withPagination } = require('../helpers');

module.exports = {
  Query: {
    character: async (_, { id }) => {
      const character = await Character.getOne(id);
      return character;
    },
    characters: async (_, args) => {
      const characters = await Character.getAll(args);
      return withPagination(characters, 0);
    },
    planets: async (_, args) => {
      const planets = await Planet.getAll(args);
      return withPagination(planets, 0);
    },
  },
  Mutation: mutations,
};

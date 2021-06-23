'use strict';

const jwt = require('jsonwebtoken');
const Character = require('../models/character');
const Planet = require('../models/planet');
const users = require('../mock/users');
const createError = require('./../error');
module.exports = {
  createPlanet: async (_, { planetInfo }) => {
    const planet = await new Planet(planetInfo).save();
    return planet;
  },
  createCharacter: async (_, { characterInfo }) => {
    const character = await new Character(characterInfo).save();
    return character;
  },
  login: (_, { email, password }) => {
    const me = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!me) return createError('login or password invalid', 401);

    const { id, permissions, roles } = me;
    return jwt.sign(
      { 'http://127.0.0.1/graphql': { roles, permissions } },
      'f1BtnWgD3VKY',
      { algorithm: 'HS256', subject: id, expiresIn: '1d' }
    );
  },
};

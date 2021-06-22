const fs = require('fs');
const characters = require('./../../mock/characters.json');
const planets = require('./../../mock/planets.json');

const getCharacters = async () => {};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('frendships')
    .del()
    .then(function () {
      getCharacters();
      // Inserts seed entries
      return knex('characters')
        .del()
        .then(() => {
          return knex('planets')
            .del()
            .then(() => {
              console.log(planets);
              console.log(typeof planets);
              return knex.insert(planets);
            });
        });
    });
};

'use strict';
const characters = require('./../../mock/characters.json');
const planets = require('./../../mock/planets.json');

const insertPlanet = (knex, planet) => {
  const { name, code, description, pictureUrl } = planet;
  return knex('planets').insert({
    name,
    code,
    description,
    pictureUrl,
  });
};

const insertCharacter = (knex, character) => {
  const { name, description, bornAt, planet, pictureUrl } = character;
  return knex('characters').insert({
    name,
    description,
    born_at: bornAt,
    planet,
    pictureUrl,
  });
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('frendships')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('characters')
        .del()
        .then(() => {
          return knex('planets')
            .del()
            .then(() => {
              const promises = planets.map((planet) =>
                insertPlanet(knex, planet)
              );

              return Promise.all(promises).then(() => {
                const promises = characters.map((character) =>
                  insertCharacter(knex, character)
                );
                return Promise.all(promises);
                s;
              });
            });
        });
    });
};

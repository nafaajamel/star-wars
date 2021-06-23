'use strict';
const characters = require('./../../mock/characters.json');
const planets = require('./../../mock/planets.json');

const insertPlanet = (knex, planet) => {
  const { name, code, description, pictureUrl } = planet;
  return knex('planet').insert({
    name,
    code,
    description,
    pictureUrl,
  });
};

const insertCharacter = (knex, character) => {
  const { name, description, bornAt, planet, pictureUrl } = character;
  return knex('character').insert({
    name,
    description,
    bornAt,
    planet,
    pictureUrl,
  });
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('frendship')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('character')
        .del()
        .then(() => {
          return knex('planet')
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

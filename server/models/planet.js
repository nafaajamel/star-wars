'use strict';
const knex = require('../db');
const { validatePage, validatepageSize } = require('./../helpers');
class Planet {
  constructor({ name, description, code, pictureUrl }) {
    this.name = name;
    this.description = description;
    this.code = code;
    this.pictureUrl = pictureUrl || '';
  }

  async save() {
    const [newPlanet] = await knex('planet')
      .insert(this)
      .returning(['id', 'name']);

    return newPlanet;
  }

  static async getAll(filters) {
    const page = validatePage(filters.page);
    const pageSize = validatepageSize(filters.pageSize);
    const offset = (page - 1) * pageSize;
    const planets = await knex('planet')
      .select(
        'planet.*',
        knex.raw(`array_agg(
          json_build_object('id',character.id)
        ) as characters`)
      )
      .leftJoin('character', 'planet.code', 'character.planet')
      .count('character.id', { as: 'population' })
      .offset(offset)
      .groupBy('planet.id')
      .orderBy('id');

    return planets;
  }
}

module.exports = Planet;

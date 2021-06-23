'use strict';
const knex = require('../db');
const {
  validateLimit,
  validatepageSize,
  validatePage,
} = require('./../helpers');
class Character {
  constructor({ name, description, bornAt, planet, pictureUrl, friends }) {
    this.name = name;
    this.description = description;
    this.bornAt = bornAt;
    this.planet = planet;
    this.pictureUrl = pictureUrl;
    this.friends = friends;
  }

  async save() {
    const { friends, ...character } = this;

    const [newCharacter] = await knex('character')
      .insert(character)
      .returning(['name', 'id']);

    const friendships = friends.map((friendId) => ({
      first: newCharacter.id,
      second: friendId,
    }));
    await knex('frendship').insert(friendships);
    return newCharacter;
  }

  static async getOne(id) {
    try {
      const characters = await knex.select().from('character').where('id', id);
      if (characters.length === 0) {
        return {};
      }
      return characters[0];
    } catch (err) {
      return err;
    }
  }

  static async getAll(filters) {
    const limit = validateLimit();

    const { birthDate } = filters;

    const page = validatePage(filters.page);
    const pageSize = validatepageSize(filters.pageSize);
    const offset = (page - 1) * pageSize;
    const characters = await knex
      .select(
        'character.*',
        knex.raw(`json_build_object('name',planet.name) as planet`),
        knex.raw(
          `
        array_agg(  
           CASE WHEN frendship.first=character.id THEN
              (select json_build_object('name',name)  from character where id = frendship.second LIMIT ?)
            ELSE
              (select  json_build_object('name',name) from character where id = frendship.first LIMIT ?)
            END
          )
           as friends`,
          [limit, limit]
        )
      )
      .from('character')
      .leftJoin('planet', 'character.planet', 'planet.code')
      .join('frendship', (qb) => {
        qb.on('frendship.first', 'character.id').orOn(
          'frendship.second',
          'character.id'
        );
      })
      .where((qb) => {
        return birthDate ? qb.where('character.bornAt', birthDate) : qb;
      })
      .offset(offset)
      .limit(pageSize)
      .groupBy('character.id', 'planet.name')
      .orderBy('character.id');

    return characters;
  }
}

module.exports = Character;

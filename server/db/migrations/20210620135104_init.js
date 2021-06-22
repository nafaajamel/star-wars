'use strict';
exports.up = function (knex) {
  return knex.schema
    .createTable('planets', (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.text('description');
      table.string('code', 9).unique().notNullable();
      table.string('pictureUrl');
      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    })
    .createTable('characters', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
      table.date('born_at');
      table.string('pictureUrl');
      table.string('planet', 9).unsigned().references('planets.code');
    })
    .createTable('frendships', (table) => {
      table.increments('id').primary();
      table.integer('first').unsigned().references('characters.id');
      table.integer('second').unsigned().references('characters.id');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('frendships')
    .dropTableIfExists('characters')
    .dropTableIfExists('planets');
};

'use strict';
exports.up = function (knex) {
  return knex.schema
    .createTable('planet', (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.text('description');
      table.string('code', 9).unique().notNullable();
      table.string('pictureUrl');
      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    })
    .createTable('character', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
      table.date('bornAt');
      table.string('pictureUrl');
      table.string('planet', 9).unsigned().references('planet.code');
    })
    .createTable('frendship', (table) => {
      table.increments('id').primary();
      table.integer('first').unsigned().references('character.id');
      table.integer('second').unsigned().references('character.id');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('frendship')
    .dropTableIfExists('character')
    .dropTableIfExists('planet');
};

'use strict';

const user = process.env.POSTGRES_USER;
const pass = process.env.POSTGRES_PASSWORD;
const db = process.env.POSTGRES_DB;
const host = process.env.POSTGRES_HOST;

const config = {
  client: 'postgresql',
  connection: {
    host,
    user,
    password: pass,
    charset: 'utf8',
    database: db,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './seeds',
  },

  migrations: {
    directory: './migrations',
  },
};

module.exports = config;

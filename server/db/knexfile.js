'use strict';

const config = {
  client: 'postgresql',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'root',
    charset: 'utf8',
    database: 'star_wars',
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
};

module.exports = config;

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'binge_clock',
      user:     'admin',
      password: 'admin'
    },
    migrations: {
      directory: './database',
    }
  }

};

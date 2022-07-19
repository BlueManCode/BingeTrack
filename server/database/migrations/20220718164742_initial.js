/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async (knex) => {
  await knex.createTable('user', (table) =>  {
    table.increment().notNullable()
    table.string('username', 255).notNullable().unique()
    table.text('password').notNullable()
    table.string('firstName', 255).notNullable()
    table.string('lastName', 255).notNullable()
    table.string('email', 255).notNullable().unique()
    table.timestamp('joinDate', 255).notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async (knex) => {
  
};

import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('incidents', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    
    table.string('ong_id').notNullable();
    
    table
      .foreign('ong_id')
      .references('id')
      .inTable('ongs')
    ;
    
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('incidents');
}
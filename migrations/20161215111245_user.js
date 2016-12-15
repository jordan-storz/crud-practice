exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', function(table) { //this creates the database in the format below
        table.increments(); //this equates to id with type serial
        table.text('email').notNullable().unique();
        table.text('password').notNullable();
        table.datetime('created');
        table.boolean('is-active').defaultTo(true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');
};

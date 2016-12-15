exports.up = function(knex, Promise) {
    return knex.schema.createTable('sticker', function(table) {
        table.increments();
        table.text('description').notNullable();
        table.text('image_url').notNullable();
        table.integer('quantity');
        table.text('size');
        table.integer('user_id') //underscore is used to define column name
            .references('user.id') // period tells knex to look in column 'id' of row 'user' to point the foreign key the foreign key
            .unsigned() //only accept positive integers
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sticker');
};

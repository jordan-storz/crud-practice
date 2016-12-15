
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sticker', function(table) {
    table.increments();
    table.text('description').notNullable();
    table.text('image_url').notNullable();
    table.integer('quantity');
    table.text('size');
    table.integer('user_id')
      .references('user.id')
      .unsigned()
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sticker');
};

var knex = require('./connection');

module.exports = {
    getOne: function(id) {
        return knex('user').where('id', id)
            .first()
    },
    getAll: function() {
        return knex.select().table('user')
    }
}

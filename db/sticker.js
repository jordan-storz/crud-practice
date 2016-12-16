var knex = require('./connection');

module.exports = {
    getStickersByUserId: function(userId) {
        return knex('sticker').where('user_id', userId) // this is the same as doing "select * from sticker where user_id = 1" in the sticker table;
    }
}

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM sticker; ALTER SEQUENCE sticker_id_seq RESTART WITH 5').then(() => {
        const stickers = [{
            id: 1,
            description: 'node.js',
            image_url: 'https://node-os.com/images/nodejs.png',
            quantity: 5,
            size: 'small',
            user_id: 1
        }, {
            id: 2,
            description: 'AngularJS',
            image_url: 'https://www.invokemedia.com/wp-content/uploads/2015/07/angular.png',
            quantity: 2,
            size: 'large',
            user_id: 2
        }, {
            id: 3,
            description: 'mac',
            image_url: 'http://vectorlogofree.com/wp-content/uploads/2013/07/apple-mac-vector-logo-400x400.png',
            quantity: 19,
            size: 'ginormous',
            user_id: 2
        }, {
            id: 4,
            description: 'java',
            image_url: 'http://logodatabases.com/wp-content/uploads/2012/03/java-logo-large.png',
            quantity: 200,
            size: 'tiny',
            user_id: 1
        }];

        return knex('sticker').insert(stickers);
    });
};

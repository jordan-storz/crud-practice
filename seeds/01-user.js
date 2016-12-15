
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3').then(() => {
    const users = [
      {
        id: 1,
        email: 'luke@example.com',
        password: 'onetwothree',
        created: new Date()
      },
      {
        id: 2,
        email: 'jordan@example.com',
        password: 'fourfive',
        created: new Date()
      }
    ];

    return knex('user').insert(users);
  });
};

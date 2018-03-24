exports.seed = (knex, Promise) => {
  return knex('goals')
    .del()
    .then(() => {
      return knex('goals').insert([
        {id: 1, goal: 'Track every drink'},
        {id: 2, goal: 'Drink a glass of water between each drink'}
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE goals_id_seq RESTART WITH 3');
    });
};

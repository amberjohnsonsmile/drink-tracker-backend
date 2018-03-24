exports.seed = (knex, Promise) => {
  return knex('drinks')
    .del()
    .then(() => {
      return knex('drinks').insert([
        {
          id: 1,
          date: '2018-03-01',
          dateString: 'Thursday, March 1',
          drinks: 3
        },
        {
          id: 2,
          date: '2018-03-02',
          dateString: 'Friday, March 2',
          drinks: 0
        },
        {
          id: 3,
          date: '2018-03-03',
          dateString: 'Saturday, March 3',
          drinks: 0
        }
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE drinks_id_seq RESTART WITH 4');
    });
};

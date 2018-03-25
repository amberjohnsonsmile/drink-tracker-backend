exports.seed = (knex, Promise) => {
  return knex('drinks')
    .del()
    .then(() => {
      return knex('drinks').insert([
        {
          id: 1,
          date: '2018-03-01',
          dateString: 'Thursday, March 1',
          drinks: 0
        },
        {
          id: 2,
          date: '2018-03-02',
          dateString: 'Friday, March 2',
          drinks: 3
        },
        {
          id: 3,
          date: '2018-03-03',
          dateString: 'Saturday, March 3',
          drinks: 0
        },
        {
          id: 4,
          date: '2018-03-04',
          dateString: 'Sunday, March 4',
          drinks: 0
        },
        {
          id: 5,
          date: '2018-03-05',
          dateString: 'Monday, March 5',
          drinks: 0
        },
        {
          id: 6,
          date: '2018-03-06',
          dateString: 'Tuesday, March 6',
          drinks: 0
        },
        {
          id: 7,
          date: '2018-03-07',
          dateString: 'Wednesday, March 7',
          drinks: 0
        },
        {
          id: 8,
          date: '2018-03-08',
          dateString: 'Thursday, March 8',
          drinks: 1
        },
        {
          id: 9,
          date: '2018-03-09',
          dateString: 'Friday, March 9',
          drinks: 3
        },
        {
          id: 10,
          date: '2018-03-10',
          dateString: 'Saturday, March 10',
          drinks: 0
        },
        {
          id: 11,
          date: '2018-03-11',
          dateString: 'Sunday, March 11',
          drinks: 1
        },
        {
          id: 12,
          date: '2018-03-12',
          dateString: 'Monday, March 12',
          drinks: 0
        },
        {
          id: 13,
          date: '2018-03-13',
          dateString: 'Tuesday, March 13',
          drinks: 3
        },
        {
          id: 14,
          date: '2018-03-14',
          dateString: 'Wednesday, March 14',
          drinks: 0
        },
        {
          id: 15,
          date: '2018-03-15',
          dateString: 'Thursday, March 15',
          drinks: 0
        },
        {
          id: 16,
          date: '2018-03-16',
          dateString: 'Friday, March 16',
          drinks: 3
        },
        {
          id: 17,
          date: '2018-03-17',
          dateString: 'Saturday, March 17',
          drinks: 1
        },
        {
          id: 18,
          date: '2018-03-18',
          dateString: 'Sunday, March 18',
          drinks: 1
        },
        {
          id: 19,
          date: '2018-03-19',
          dateString: 'Monday, March 19',
          drinks: 0
        },
        {
          id: 20,
          date: '2018-03-20',
          dateString: 'Tuesday, March 20',
          drinks: 1
        },
        {
          id: 21,
          date: '2018-03-21',
          dateString: 'Wednesday, March 21',
          drinks: 2
        },
        {
          id: 22,
          date: '2018-03-22',
          dateString: 'Thursday, March 22',
          drinks: 0
        },
        {
          id: 23,
          date: '2018-03-23',
          dateString: 'Friday, March 23',
          drinks: 3
        },
        {
          id: 24,
          date: '2018-03-24',
          dateString: 'Saturday, March 24',
          drinks: 0
        },
        {
          id: 25,
          date: '2018-03-25',
          dateString: 'Sunday, March 25',
          drinks: 0
        },
        {
          id: 26,
          date: '2018-03-26',
          dateString: 'Monday, March 26',
          drinks: 0
        },
        {
          id: 27,
          date: '2018-03-27',
          dateString: 'Tuesday, March 27',
          drinks: 1
        },
        {
          id: 28,
          date: '2018-03-28',
          dateString: 'Wednesday, March 28',
          drinks: 1
        },
        {
          id: 29,
          date: '2018-03-29',
          dateString: 'Thursday, March 29',
          drinks: 0
        },
        {
          id: 30,
          date: '2018-03-30',
          dateString: 'Friday, March 30',
          drinks: 0
        },
        {
          id: 31,
          date: '2018-03-31',
          dateString: 'Saturday, March 31',
          drinks: 0
        }
      ]);
    });
};

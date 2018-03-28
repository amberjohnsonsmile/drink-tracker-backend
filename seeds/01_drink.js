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
        },
        {
          id: 32,
          date: '2018-04-01',
          dateString: 'Sunday, April 1',
          drinks: 0
        },
        {
          id: 33,
          date: '2018-04-02',
          dateString: 'Monday, April 2',
          drinks: 0
        },
        {
          id: 34,
          date: '2018-04-03',
          dateString: 'Tuesday, April 3',
          drinks: 0
        },
        {
          id: 35,
          date: '2018-04-04',
          dateString: 'Wednesday, April 4',
          drinks: 0
        },
        {
          id: 36,
          date: '2018-04-05',
          dateString: 'Thursday, April 5',
          drinks: 0
        },
        {
          id: 37,
          date: '2018-04-06',
          dateString: 'Friday, April 6',
          drinks: 0
        },
        {
          id: 38,
          date: '2018-04-07',
          dateString: 'Saturday, April 7',
          drinks: 0
        },
        {
          id: 39,
          date: '2018-04-08',
          dateString: 'Sunday, April 8',
          drinks: 0
        },
        {
          id: 40,
          date: '2018-04-09',
          dateString: 'Monday, April 9',
          drinks: 0
        },
        {
          id: 41,
          date: '2018-04-10',
          dateString: 'Tuesday, April 10',
          drinks: 0
        },
        {
          id: 42,
          date: '2018-04-11',
          dateString: 'Wednesday, April 11',
          drinks: 0
        },
        {
          id: 43,
          date: '2018-04-12',
          dateString: 'Thursday, April 12',
          drinks: 0
        },
        {
          id: 44,
          date: '2018-04-13',
          dateString: 'Friday, April 13',
          drinks: 0
        },
        {
          id: 45,
          date: '2018-04-14',
          dateString: 'Saturday, April 14',
          drinks: 0
        },
        {
          id: 46,
          date: '2018-04-15',
          dateString: 'Sunday, April 15',
          drinks: 0
        },
        {
          id: 47,
          date: '2018-04-16',
          dateString: 'Monday, April 16',
          drinks: 0
        },
        {
          id: 48,
          date: '2018-04-17',
          dateString: 'Tuesday, April 17',
          drinks: 0
        },
        {
          id: 49,
          date: '2018-04-18',
          dateString: 'Wednesday, April 18',
          drinks: 0
        },
        {
          id: 50,
          date: '2018-04-19',
          dateString: 'Thursday, April 19',
          drinks: 0
        },
        {
          id: 51,
          date: '2018-04-20',
          dateString: 'Friday, April 20',
          drinks: 0
        },
        {
          id: 52,
          date: '2018-04-21',
          dateString: 'Saturday, April 21',
          drinks: 0
        },
        {
          id: 53,
          date: '2018-04-22',
          dateString: 'Sunday, April 22',
          drinks: 0
        },
        {
          id: 54,
          date: '2018-04-23',
          dateString: 'Monday, April 23',
          drinks: 0
        },
        {
          id: 55,
          date: '2018-04-24',
          dateString: 'Tuesday, April 24',
          drinks: 0
        },
        {
          id: 56,
          date: '2018-04-25',
          dateString: 'Wednesday, April 25',
          drinks: 0
        },
        {
          id: 57,
          date: '2018-04-26',
          dateString: 'Thursday, April 26',
          drinks: 0
        },
        {
          id: 58,
          date: '2018-04-27',
          dateString: 'Friday, April 27',
          drinks: 0
        },
        {
          id: 59,
          date: '2018-04-28',
          dateString: 'Saturday, April 28',
          drinks: 0
        },
        {
          id: 60,
          date: '2018-04-29',
          dateString: 'Sunday, April 29',
          drinks: 0
        },
        {
          id: 61,
          date: '2018-04-30',
          dateString: 'Monday, April 30',
          drinks: 0
        },
        {
          id: 62,
          date: '2018-05-01',
          dateString: 'Tuesday, May 1',
          drinks: 0
        },
        {
          id: 63,
          date: '2018-05-02',
          dateString: 'Wednesday, May 2',
          drinks: 0
        },
        {
          id: 64,
          date: '2018-05-03',
          dateString: 'Thursday, May 3',
          drinks: 0
        },
        {
          id: 65,
          date: '2018-05-04',
          dateString: 'Friday, May 4',
          drinks: 0
        },
        {
          id: 66,
          date: '2018-05-05',
          dateString: 'Saturday, May 5',
          drinks: 0
        },
        {
          id: 67,
          date: '2018-05-06',
          dateString: 'Sunday, May 6',
          drinks: 0
        },
        {
          id: 68,
          date: '2018-05-07',
          dateString: 'Monday, May 7',
          drinks: 0
        },
        {
          id: 69,
          date: '2018-05-08',
          dateString: 'Tuesday, May 8',
          drinks: 0
        },
        {
          id: 70,
          date: '2018-05-09',
          dateString: 'Wednesday, May 9',
          drinks: 0
        },
        {
          id: 71,
          date: '2018-05-10',
          dateString: 'Thursday, May 10',
          drinks: 0
        },
        {
          id: 72,
          date: '2018-05-11',
          dateString: 'Friday, May 11',
          drinks: 0
        },
        {
          id: 73,
          date: '2018-05-12',
          dateString: 'Saturday, May 12',
          drinks: 0
        },
        {
          id: 74,
          date: '2018-05-13',
          dateString: 'Sunday, May 13',
          drinks: 0
        },
        {
          id: 75,
          date: '2018-05-14',
          dateString: 'Monday, May 14',
          drinks: 0
        },
        {
          id: 76,
          date: '2018-05-15',
          dateString: 'Tuesday, May 15',
          drinks: 0
        },
        {
          id: 77,
          date: '2018-05-16',
          dateString: 'Wednesday, May 16',
          drinks: 0
        },
        {
          id: 78,
          date: '2018-05-17',
          dateString: 'Thursday, May 17',
          drinks: 0
        },
        {
          id: 79,
          date: '2018-05-18',
          dateString: 'Friday, May 18',
          drinks: 0
        },
        {
          id: 80,
          date: '2018-05-19',
          dateString: 'Saturday, May 19',
          drinks: 0
        },
        {
          id: 81,
          date: '2018-05-20',
          dateString: 'Sunday, May 20',
          drinks: 0
        },
        {
          id: 82,
          date: '2018-05-21',
          dateString: 'Monday, May 21',
          drinks: 0
        },
        {
          id: 83,
          date: '2018-05-22',
          dateString: 'Tuesday, May 22',
          drinks: 0
        },
        {
          id: 84,
          date: '2018-05-23',
          dateString: 'Wednesday, May 23',
          drinks: 0
        },
        {
          id: 85,
          date: '2018-05-24',
          dateString: 'Thursday, May 24',
          drinks: 0
        },
        {
          id: 86,
          date: '2018-05-25',
          dateString: 'Friday, May 25',
          drinks: 0
        },
        {
          id: 87,
          date: '2018-05-26',
          dateString: 'Saturday, May 26',
          drinks: 0
        },
        {
          id: 88,
          date: '2018-05-27',
          dateString: 'Sunday, May 27',
          drinks: 0
        },
        {
          id: 89,
          date: '2018-05-28',
          dateString: 'Monday, May 28',
          drinks: 0
        },
        {
          id: 90,
          date: '2018-05-29',
          dateString: 'Tuesday, May 29',
          drinks: 0
        },
        {
          id: 91,
          date: '2018-05-30',
          dateString: 'Wednesday, May 30',
          drinks: 0
        },
        {
          id: 92,
          date: '2018-05-31',
          dateString: 'Thursday, May 31',
          drinks: 0
        },
        {
          id: 93,
          date: '2018-06-01',
          dateString: 'Friday, June 1',
          drinks: 0
        },
        {
          id: 94,
          date: '2018-06-02',
          dateString: 'Saturday, June 2',
          drinks: 0
        },
        {
          id: 95,
          date: '2018-06-03',
          dateString: 'Sunday, June 3',
          drinks: 0
        },
        {
          id: 96,
          date: '2018-06-04',
          dateString: 'Monday, June 4',
          drinks: 0
        },
        {
          id: 97,
          date: '2018-06-05',
          dateString: 'Tuesday, June 5',
          drinks: 0
        },
        {
          id: 98,
          date: '2018-06-06',
          dateString: 'Wednesday, June 6',
          drinks: 0
        },
        {
          id: 99,
          date: '2018-06-07',
          dateString: 'Thursday, June 7',
          drinks: 0
        },
        {
          id: 100,
          date: '2018-06-08',
          dateString: 'Friday, June 8',
          drinks: 0
        },
        {
          id: 101,
          date: '2018-06-09',
          dateString: 'Saturday, June 9',
          drinks: 0
        },
        {
          id: 102,
          date: '2018-06-10',
          dateString: 'Sunday, June 10',
          drinks: 0
        },
        {
          id: 103,
          date: '2018-06-11',
          dateString: 'Monday, June 11',
          drinks: 0
        },
        {
          id: 104,
          date: '2018-06-12',
          dateString: 'Tuesday, June 12',
          drinks: 0
        },
        {
          id: 105,
          date: '2018-06-13',
          dateString: 'Wednesday, June 13',
          drinks: 0
        },
        {
          id: 106,
          date: '2018-06-14',
          dateString: 'Thursday, June 14',
          drinks: 0
        },
        {
          id: 107,
          date: '2018-06-15',
          dateString: 'Friday, June 15',
          drinks: 0
        },
        {
          id: 108,
          date: '2018-06-16',
          dateString: 'Saturday, June 16',
          drinks: 0
        },
        {
          id: 109,
          date: '2018-06-17',
          dateString: 'Sunday, June 17',
          drinks: 0
        },
        {
          id: 110,
          date: '2018-06-18',
          dateString: 'Monday, June 18',
          drinks: 0
        },
        {
          id: 111,
          date: '2018-06-19',
          dateString: 'Tuesday, June 19',
          drinks: 0
        },
        {
          id: 112,
          date: '2018-06-20',
          dateString: 'Wednesday, June 20',
          drinks: 0
        },
        {
          id: 113,
          date: '2018-06-21',
          dateString: 'Thursday, June 21',
          drinks: 0
        },
        {
          id: 114,
          date: '2018-06-22',
          dateString: 'Friday, June 22',
          drinks: 0
        },
        {
          id: 115,
          date: '2018-06-23',
          dateString: 'Saturday, June 23',
          drinks: 0
        },
        {
          id: 116,
          date: '2018-06-24',
          dateString: 'Sunday, June 24',
          drinks: 0
        },
        {
          id: 117,
          date: '2018-06-25',
          dateString: 'Monday, June 25',
          drinks: 0
        },
        {
          id: 118,
          date: '2018-06-26',
          dateString: 'Tuesday, June 26',
          drinks: 0
        },
        {
          id: 119,
          date: '2018-06-27',
          dateString: 'Wednesday, June 27',
          drinks: 0
        },
        {
          id: 120,
          date: '2018-06-28',
          dateString: 'Thursday, June 28',
          drinks: 0
        },
        {
          id: 121,
          date: '2018-06-29',
          dateString: 'Friday, June 29',
          drinks: 0
        },
        {
          id: 122,
          date: '2018-06-30',
          dateString: 'Saturday, June 30',
          drinks: 0
        },
        {
          id: 123,
          date: '2018-07-01',
          dateString: 'Sunday, July 1',
          drinks: 0
        },
        {
          id: 124,
          date: '2018-07-02',
          dateString: 'Monday, July 2',
          drinks: 0
        },
        {
          id: 125,
          date: '2018-07-03',
          dateString: 'Tuesday, July 3',
          drinks: 0
        },
        {
          id: 126,
          date: '2018-07-04',
          dateString: 'Wednesday, July 4',
          drinks: 0
        },
        {
          id: 127,
          date: '2018-07-05',
          dateString: 'Thursday, July 5',
          drinks: 0
        },
        {
          id: 128,
          date: '2018-07-06',
          dateString: 'Friday, July 6',
          drinks: 0
        },
        {
          id: 129,
          date: '2018-07-07',
          dateString: 'Saturday, July 7',
          drinks: 0
        },
        {
          id: 130,
          date: '2018-07-08',
          dateString: 'Sunday, July 8',
          drinks: 0
        },
        {
          id: 131,
          date: '2018-07-09',
          dateString: 'Monday, July 9',
          drinks: 0
        },
        {
          id: 132,
          date: '2018-07-10',
          dateString: 'Tuesday, July 10',
          drinks: 0
        },
        {
          id: 133,
          date: '2018-07-11',
          dateString: 'Wednesday, July 11',
          drinks: 0
        },
        {
          id: 134,
          date: '2018-07-12',
          dateString: 'Thursday, July 12',
          drinks: 0
        },
        {
          id: 135,
          date: '2018-07-13',
          dateString: 'Friday, July 13',
          drinks: 0
        },
        {
          id: 136,
          date: '2018-07-14',
          dateString: 'Saturday, July 14',
          drinks: 0
        },
        {
          id: 137,
          date: '2018-07-15',
          dateString: 'Sunday, July 15',
          drinks: 0
        },
        {
          id: 138,
          date: '2018-07-16',
          dateString: 'Monday, July 16',
          drinks: 0
        },
        {
          id: 139,
          date: '2018-07-17',
          dateString: 'Tuesday, July 17',
          drinks: 0
        },
        {
          id: 140,
          date: '2018-07-18',
          dateString: 'Wednesday, July 18',
          drinks: 0
        },
        {
          id: 141,
          date: '2018-07-19',
          dateString: 'Thursday, July 19',
          drinks: 0
        },
        {
          id: 142,
          date: '2018-07-20',
          dateString: 'Friday, July 20',
          drinks: 0
        },
        {
          id: 143,
          date: '2018-07-21',
          dateString: 'Saturday, July 21',
          drinks: 0
        },
        {
          id: 144,
          date: '2018-07-22',
          dateString: 'Sunday, July 22',
          drinks: 0
        },
        {
          id: 145,
          date: '2018-07-23',
          dateString: 'Monday, July 23',
          drinks: 0
        },
        {
          id: 146,
          date: '2018-07-24',
          dateString: 'Tuesday, July 24',
          drinks: 0
        },
        {
          id: 147,
          date: '2018-07-25',
          dateString: 'Wednesday, July 25',
          drinks: 0
        },
        {
          id: 148,
          date: '2018-07-26',
          dateString: 'Thursday, July 26',
          drinks: 0
        },
        {
          id: 149,
          date: '2018-07-27',
          dateString: 'Friday, July 27',
          drinks: 0
        },
        {
          id: 150,
          date: '2018-07-28',
          dateString: 'Saturday, July 28',
          drinks: 0
        },
        {
          id: 151,
          date: '2018-07-29',
          dateString: 'Sunday, July 29',
          drinks: 0
        },
        {
          id: 152,
          date: '2018-07-30',
          dateString: 'Monday, July 30',
          drinks: 0
        },
        {
          id: 153,
          date: '2018-07-31',
          dateString: 'Tuesday, July 31',
          drinks: 0
        },
        {
          id: 154,
          date: '2018-08-01',
          dateString: 'Wednesday, August 1',
          drinks: 0
        },
        {
          id: 155,
          date: '2018-08-02',
          dateString: 'Thursday, August 2',
          drinks: 0
        },
        {
          id: 156,
          date: '2018-08-03',
          dateString: 'Friday, August 3',
          drinks: 0
        },
        {
          id: 157,
          date: '2018-08-04',
          dateString: 'Saturday, August 4',
          drinks: 0
        },
        {
          id: 158,
          date: '2018-08-05',
          dateString: 'Sunday, August 5',
          drinks: 0
        },
        {
          id: 159,
          date: '2018-08-06',
          dateString: 'Monday, August 6',
          drinks: 0
        },
        {
          id: 160,
          date: '2018-08-07',
          dateString: 'Tuesday, August 7',
          drinks: 0
        },
        {
          id: 161,
          date: '2018-08-08',
          dateString: 'Wednesday, August 8',
          drinks: 0
        },
        {
          id: 162,
          date: '2018-08-09',
          dateString: 'Thursday, August 9',
          drinks: 0
        },
        {
          id: 163,
          date: '2018-08-10',
          dateString: 'Friday, August 10',
          drinks: 0
        },
        {
          id: 164,
          date: '2018-08-11',
          dateString: 'Saturday, August 11',
          drinks: 0
        },
        {
          id: 165,
          date: '2018-08-12',
          dateString: 'Sunday, August 12',
          drinks: 0
        },
        {
          id: 166,
          date: '2018-08-13',
          dateString: 'Monday, August 13',
          drinks: 0
        },
        {
          id: 167,
          date: '2018-08-14',
          dateString: 'Tuesday, August 14',
          drinks: 0
        },
        {
          id: 168,
          date: '2018-08-15',
          dateString: 'Wednesday, August 15',
          drinks: 0
        },
        {
          id: 169,
          date: '2018-08-16',
          dateString: 'Thursday, August 16',
          drinks: 0
        },
        {
          id: 170,
          date: '2018-08-17',
          dateString: 'Friday, August 17',
          drinks: 0
        },
        {
          id: 171,
          date: '2018-08-18',
          dateString: 'Saturday, August 18',
          drinks: 0
        },
        {
          id: 172,
          date: '2018-08-19',
          dateString: 'Sunday, August 19',
          drinks: 0
        },
        {
          id: 173,
          date: '2018-08-20',
          dateString: 'Monday, August 20',
          drinks: 0
        },
        {
          id: 174,
          date: '2018-08-21',
          dateString: 'Tuesday, August 21',
          drinks: 0
        },
        {
          id: 175,
          date: '2018-08-22',
          dateString: 'Wednesday, August 22',
          drinks: 0
        },
        {
          id: 176,
          date: '2018-08-23',
          dateString: 'Thursday, August 23',
          drinks: 0
        },
        {
          id: 177,
          date: '2018-08-24',
          dateString: 'Friday, August 24',
          drinks: 0
        },
        {
          id: 178,
          date: '2018-08-25',
          dateString: 'Saturday, August 25',
          drinks: 0
        },
        {
          id: 179,
          date: '2018-08-26',
          dateString: 'Sunday, August 26',
          drinks: 0
        },
        {
          id: 180,
          date: '2018-08-27',
          dateString: 'Monday, August 27',
          drinks: 0
        },
        {
          id: 181,
          date: '2018-08-28',
          dateString: 'Tuesday, August 28',
          drinks: 0
        },
        {
          id: 182,
          date: '2018-08-29',
          dateString: 'Wednesday, August 29',
          drinks: 0
        },
        {
          id: 183,
          date: '2018-08-30',
          dateString: 'Thursday, August 30',
          drinks: 0
        },
        {
          id: 184,
          date: '2018-08-31',
          dateString: 'Friday, August 31',
          drinks: 0
        },
        {
          id: 185,
          date: '2018-09-01',
          dateString: 'Saturday, September 1',
          drinks: 0
        },
        {
          id: 186,
          date: '2018-09-02',
          dateString: 'Sunday, September 2',
          drinks: 0
        },
        {
          id: 187,
          date: '2018-09-03',
          dateString: 'Monday, September 3',
          drinks: 0
        },
        {
          id: 188,
          date: '2018-09-04',
          dateString: 'Tuesday, September 4',
          drinks: 0
        },
        {
          id: 189,
          date: '2018-09-05',
          dateString: 'Wednesday, September 5',
          drinks: 0
        },
        {
          id: 190,
          date: '2018-09-06',
          dateString: 'Thursday, September 6',
          drinks: 0
        },
        {
          id: 191,
          date: '2018-09-07',
          dateString: 'Friday, September 7',
          drinks: 0
        },
        {
          id: 192,
          date: '2018-09-08',
          dateString: 'Saturday, September 8',
          drinks: 0
        },
        {
          id: 193,
          date: '2018-09-09',
          dateString: 'Sunday, September 9',
          drinks: 0
        },
        {
          id: 194,
          date: '2018-09-10',
          dateString: 'Monday, September 10',
          drinks: 0
        },
        {
          id: 195,
          date: '2018-09-11',
          dateString: 'Tuesday, September 11',
          drinks: 0
        },
        {
          id: 196,
          date: '2018-09-12',
          dateString: 'Wednesday, September 12',
          drinks: 0
        },
        {
          id: 197,
          date: '2018-09-13',
          dateString: 'Thursday, September 13',
          drinks: 0
        },
        {
          id: 198,
          date: '2018-09-14',
          dateString: 'Friday, September 14',
          drinks: 0
        },
        {
          id: 199,
          date: '2018-09-15',
          dateString: 'Saturday, September 15',
          drinks: 0
        },
        {
          id: 200,
          date: '2018-09-16',
          dateString: 'Sunday, September 16',
          drinks: 0
        },
        {
          id: 201,
          date: '2018-09-17',
          dateString: 'Monday, September 17',
          drinks: 0
        },
        {
          id: 202,
          date: '2018-09-18',
          dateString: 'Tuesday, September 18',
          drinks: 0
        },
        {
          id: 203,
          date: '2018-09-19',
          dateString: 'Wednesday, September 19',
          drinks: 0
        },
        {
          id: 204,
          date: '2018-09-20',
          dateString: 'Thursday, September 20',
          drinks: 0
        },
        {
          id: 205,
          date: '2018-09-21',
          dateString: 'Friday, September 21',
          drinks: 0
        },
        {
          id: 206,
          date: '2018-09-22',
          dateString: 'Saturday, September 22',
          drinks: 0
        },
        {
          id: 207,
          date: '2018-09-23',
          dateString: 'Sunday, September 23',
          drinks: 0
        },
        {
          id: 208,
          date: '2018-09-24',
          dateString: 'Monday, September 24',
          drinks: 0
        },
        {
          id: 209,
          date: '2018-09-25',
          dateString: 'Tuesday, September 25',
          drinks: 0
        },
        {
          id: 210,
          date: '2018-09-26',
          dateString: 'Wednesday, September 26',
          drinks: 0
        },
        {
          id: 211,
          date: '2018-09-27',
          dateString: 'Thursday, September 27',
          drinks: 0
        },
        {
          id: 212,
          date: '2018-09-28',
          dateString: 'Friday, September 28',
          drinks: 0
        },
        {
          id: 213,
          date: '2018-09-29',
          dateString: 'Saturday, September 29',
          drinks: 0
        },
        {
          id: 214,
          date: '2018-09-30',
          dateString: 'Sunday, September 30',
          drinks: 0
        },
        {
          id: 215,
          date: '2018-10-01',
          dateString: 'Monday, October 1',
          drinks: 0
        },
        {
          id: 216,
          date: '2018-10-02',
          dateString: 'Tuesday, October 2',
          drinks: 0
        },
        {
          id: 217,
          date: '2018-10-03',
          dateString: 'Wednesday, October 3',
          drinks: 0
        },
        {
          id: 218,
          date: '2018-10-04',
          dateString: 'Thursday, October 4',
          drinks: 0
        },
        {
          id: 219,
          date: '2018-10-05',
          dateString: 'Friday, October 5',
          drinks: 0
        },
        {
          id: 220,
          date: '2018-10-06',
          dateString: 'Saturday, October 6',
          drinks: 0
        },
        {
          id: 221,
          date: '2018-10-07',
          dateString: 'Sunday, October 7',
          drinks: 0
        },
        {
          id: 222,
          date: '2018-10-08',
          dateString: 'Monday, October 8',
          drinks: 0
        },
        {
          id: 223,
          date: '2018-10-09',
          dateString: 'Tuesday, October 9',
          drinks: 0
        },
        {
          id: 224,
          date: '2018-10-10',
          dateString: 'Wednesday, October 10',
          drinks: 0
        },
        {
          id: 225,
          date: '2018-10-11',
          dateString: 'Thursday, October 11',
          drinks: 0
        },
        {
          id: 226,
          date: '2018-10-12',
          dateString: 'Friday, October 12',
          drinks: 0
        },
        {
          id: 227,
          date: '2018-10-13',
          dateString: 'Saturday, October 13',
          drinks: 0
        },
        {
          id: 228,
          date: '2018-10-14',
          dateString: 'Sunday, October 14',
          drinks: 0
        },
        {
          id: 229,
          date: '2018-10-15',
          dateString: 'Monday, October 15',
          drinks: 0
        },
        {
          id: 230,
          date: '2018-10-16',
          dateString: 'Tuesday, October 16',
          drinks: 0
        },
        {
          id: 231,
          date: '2018-10-17',
          dateString: 'Wednesday, October 17',
          drinks: 0
        },
        {
          id: 232,
          date: '2018-10-18',
          dateString: 'Thursday, October 18',
          drinks: 0
        },
        {
          id: 233,
          date: '2018-10-19',
          dateString: 'Friday, October 19',
          drinks: 0
        },
        {
          id: 234,
          date: '2018-10-20',
          dateString: 'Saturday, October 20',
          drinks: 0
        },
        {
          id: 235,
          date: '2018-10-21',
          dateString: 'Sunday, October 21',
          drinks: 0
        },
        {
          id: 236,
          date: '2018-10-22',
          dateString: 'Monday, October 22',
          drinks: 0
        },
        {
          id: 237,
          date: '2018-10-23',
          dateString: 'Tuesday, October 23',
          drinks: 0
        },
        {
          id: 238,
          date: '2018-10-24',
          dateString: 'Wednesday, October 24',
          drinks: 0
        },
        {
          id: 239,
          date: '2018-10-25',
          dateString: 'Thursday, October 25',
          drinks: 0
        },
        {
          id: 240,
          date: '2018-10-26',
          dateString: 'Friday, October 26',
          drinks: 0
        },
        {
          id: 241,
          date: '2018-10-27',
          dateString: 'Saturday, October 27',
          drinks: 0
        },
        {
          id: 242,
          date: '2018-10-28',
          dateString: 'Sunday, October 28',
          drinks: 0
        },
        {
          id: 243,
          date: '2018-10-29',
          dateString: 'Monday, October 29',
          drinks: 0
        },
        {
          id: 244,
          date: '2018-10-30',
          dateString: 'Tuesday, October 30',
          drinks: 0
        },
        {
          id: 245,
          date: '2018-10-31',
          dateString: 'Wednesday, October 31',
          drinks: 0
        },
        {
          id: 246,
          date: '2018-11-01',
          dateString: 'Thursday, November 1',
          drinks: 0
        },
        {
          id: 247,
          date: '2018-11-02',
          dateString: 'Friday, November 2',
          drinks: 0
        },
        {
          id: 248,
          date: '2018-11-03',
          dateString: 'Saturday, November 3',
          drinks: 0
        },
        {
          id: 249,
          date: '2018-11-04',
          dateString: 'Sunday, November 4',
          drinks: 0
        },
        {
          id: 250,
          date: '2018-11-05',
          dateString: 'Monday, November 5',
          drinks: 0
        },
        {
          id: 251,
          date: '2018-11-06',
          dateString: 'Tuesday, November 6',
          drinks: 0
        },
        {
          id: 252,
          date: '2018-11-07',
          dateString: 'Wednesday, November 7',
          drinks: 0
        },
        {
          id: 253,
          date: '2018-11-08',
          dateString: 'Thursday, November 8',
          drinks: 0
        },
        {
          id: 254,
          date: '2018-11-09',
          dateString: 'Friday, November 9',
          drinks: 0
        },
        {
          id: 255,
          date: '2018-11-10',
          dateString: 'Saturday, November 10',
          drinks: 0
        },
        {
          id: 256,
          date: '2018-11-11',
          dateString: 'Sunday, November 11',
          drinks: 0
        },
        {
          id: 257,
          date: '2018-11-12',
          dateString: 'Monday, November 12',
          drinks: 0
        },
        {
          id: 258,
          date: '2018-11-13',
          dateString: 'Tuesday, November 13',
          drinks: 0
        },
        {
          id: 259,
          date: '2018-11-14',
          dateString: 'Wednesday, November 14',
          drinks: 0
        },
        {
          id: 260,
          date: '2018-11-15',
          dateString: 'Thursday, November 15',
          drinks: 0
        },
        {
          id: 261,
          date: '2018-11-16',
          dateString: 'Friday, November 16',
          drinks: 0
        },
        {
          id: 262,
          date: '2018-11-17',
          dateString: 'Saturday, November 17',
          drinks: 0
        },
        {
          id: 263,
          date: '2018-11-18',
          dateString: 'Sunday, November 18',
          drinks: 0
        },
        {
          id: 264,
          date: '2018-11-19',
          dateString: 'Monday, November 19',
          drinks: 0
        },
        {
          id: 265,
          date: '2018-11-20',
          dateString: 'Tuesday, November 20',
          drinks: 0
        },
        {
          id: 266,
          date: '2018-11-21',
          dateString: 'Wednesday, November 21',
          drinks: 0
        },
        {
          id: 267,
          date: '2018-11-22',
          dateString: 'Thursday, November 22',
          drinks: 0
        },
        {
          id: 268,
          date: '2018-11-23',
          dateString: 'Friday, November 23',
          drinks: 0
        },
        {
          id: 269,
          date: '2018-11-24',
          dateString: 'Saturday, November 24',
          drinks: 0
        },
        {
          id: 270,
          date: '2018-11-25',
          dateString: 'Sunday, November 25',
          drinks: 0
        },
        {
          id: 271,
          date: '2018-11-26',
          dateString: 'Monday, November 26',
          drinks: 0
        },
        {
          id: 272,
          date: '2018-11-27',
          dateString: 'Tuesday, November 27',
          drinks: 0
        },
        {
          id: 273,
          date: '2018-11-28',
          dateString: 'Wednesday, November 28',
          drinks: 0
        },
        {
          id: 274,
          date: '2018-11-29',
          dateString: 'Thursday, November 29',
          drinks: 0
        },
        {
          id: 275,
          date: '2018-11-30',
          dateString: 'Friday, November 30',
          drinks: 0
        },
        {
          id: 276,
          date: '2018-12-01',
          dateString: 'Saturday, December 1',
          drinks: 0
        },
        {
          id: 277,
          date: '2018-12-02',
          dateString: 'Sunday, December 2',
          drinks: 0
        },
        {
          id: 278,
          date: '2018-12-03',
          dateString: 'Monday, December 3',
          drinks: 0
        },
        {
          id: 279,
          date: '2018-12-04',
          dateString: 'Tuesday, December 4',
          drinks: 0
        },
        {
          id: 280,
          date: '2018-12-05',
          dateString: 'Wednesday, December 5',
          drinks: 0
        },
        {
          id: 281,
          date: '2018-12-06',
          dateString: 'Thursday, December 6',
          drinks: 0
        },
        {
          id: 282,
          date: '2018-12-07',
          dateString: 'Friday, December 7',
          drinks: 0
        },
        {
          id: 283,
          date: '2018-12-08',
          dateString: 'Saturday, December 8',
          drinks: 0
        },
        {
          id: 284,
          date: '2018-12-09',
          dateString: 'Sunday, December 9',
          drinks: 0
        },
        {
          id: 285,
          date: '2018-12-10',
          dateString: 'Monday, December 10',
          drinks: 0
        },
        {
          id: 286,
          date: '2018-12-11',
          dateString: 'Tuesday, December 11',
          drinks: 0
        },
        {
          id: 287,
          date: '2018-12-12',
          dateString: 'Wednesday, December 12',
          drinks: 0
        },
        {
          id: 288,
          date: '2018-12-13',
          dateString: 'Thursday, December 13',
          drinks: 0
        },
        {
          id: 289,
          date: '2018-12-14',
          dateString: 'Friday, December 14',
          drinks: 0
        },
        {
          id: 290,
          date: '2018-12-15',
          dateString: 'Saturday, December 15',
          drinks: 0
        },
        {
          id: 291,
          date: '2018-12-16',
          dateString: 'Sunday, December 16',
          drinks: 0
        },
        {
          id: 292,
          date: '2018-12-17',
          dateString: 'Monday, December 17',
          drinks: 0
        },
        {
          id: 293,
          date: '2018-12-18',
          dateString: 'Tuesday, December 18',
          drinks: 0
        },
        {
          id: 294,
          date: '2018-12-19',
          dateString: 'Wednesday, December 19',
          drinks: 0
        },
        {
          id: 295,
          date: '2018-12-20',
          dateString: 'Thursday, December 20',
          drinks: 0
        },
        {
          id: 296,
          date: '2018-12-21',
          dateString: 'Friday, December 21',
          drinks: 0
        },
        {
          id: 297,
          date: '2018-12-22',
          dateString: 'Saturday, December 22',
          drinks: 0
        },
        {
          id: 298,
          date: '2018-12-23',
          dateString: 'Sunday, December 23',
          drinks: 0
        },
        {
          id: 299,
          date: '2018-12-24',
          dateString: 'Monday, December 24',
          drinks: 0
        },
        {
          id: 300,
          date: '2018-12-25',
          dateString: 'Tuesday, December 25',
          drinks: 0
        },
        {
          id: 301,
          date: '2018-12-26',
          dateString: 'Wednesday, December 26',
          drinks: 0
        },
        {
          id: 302,
          date: '2018-12-27',
          dateString: 'Thursday, December 27',
          drinks: 0
        },
        {
          id: 303,
          date: '2018-12-28',
          dateString: 'Friday, December 28',
          drinks: 0
        },
        {
          id: 304,
          date: '2018-12-29',
          dateString: 'Saturday, December 29',
          drinks: 0
        },
        {
          id: 305,
          date: '2018-12-30',
          dateString: 'Sunday, December 30',
          drinks: 0
        },
        {
          id: 306,
          date: '2018-12-31',
          dateString: 'Monday, December 31',
          drinks: 0
        },
        {
          id: 307,
          date: '2019-01-01',
          dateString: 'Tuesday, January 1',
          drinks: 0
        },
        {
          id: 308,
          date: '2019-01-02',
          dateString: 'Wednesday, January 2',
          drinks: 0
        },
        {
          id: 309,
          date: '2019-01-03',
          dateString: 'Thursday, January 3',
          drinks: 0
        },
        {
          id: 310,
          date: '2019-01-04',
          dateString: 'Friday, January 4',
          drinks: 0
        },
        {
          id: 311,
          date: '2019-01-05',
          dateString: 'Saturday, January 5',
          drinks: 0
        },
        {
          id: 312,
          date: '2019-01-06',
          dateString: 'Sunday, January 6',
          drinks: 0
        },
        {
          id: 313,
          date: '2019-01-07',
          dateString: 'Monday, January 7',
          drinks: 0
        },
        {
          id: 314,
          date: '2019-01-08',
          dateString: 'Tuesday, January 8',
          drinks: 0
        },
        {
          id: 315,
          date: '2019-01-09',
          dateString: 'Wednesday, January 9',
          drinks: 0
        },
        {
          id: 316,
          date: '2019-01-10',
          dateString: 'Thursday, January 10',
          drinks: 0
        },
        {
          id: 317,
          date: '2019-01-11',
          dateString: 'Friday, January 11',
          drinks: 0
        },
        {
          id: 318,
          date: '2019-01-12',
          dateString: 'Saturday, January 12',
          drinks: 0
        },
        {
          id: 319,
          date: '2019-01-13',
          dateString: 'Sunday, January 13',
          drinks: 0
        },
        {
          id: 320,
          date: '2019-01-14',
          dateString: 'Monday, January 14',
          drinks: 0
        },
        {
          id: 321,
          date: '2019-01-15',
          dateString: 'Tuesday, January 15',
          drinks: 0
        },
        {
          id: 322,
          date: '2019-01-16',
          dateString: 'Wednesday, January 16',
          drinks: 0
        },
        {
          id: 323,
          date: '2019-01-17',
          dateString: 'Thursday, January 17',
          drinks: 0
        },
        {
          id: 324,
          date: '2019-01-18',
          dateString: 'Friday, January 18',
          drinks: 0
        },
        {
          id: 325,
          date: '2019-01-19',
          dateString: 'Saturday, January 19',
          drinks: 0
        },
        {
          id: 326,
          date: '2019-01-20',
          dateString: 'Sunday, January 20',
          drinks: 0
        },
        {
          id: 327,
          date: '2019-01-21',
          dateString: 'Monday, January 21',
          drinks: 0
        },
        {
          id: 328,
          date: '2019-01-22',
          dateString: 'Tuesday, January 22',
          drinks: 0
        },
        {
          id: 329,
          date: '2019-01-23',
          dateString: 'Wednesday, January 23',
          drinks: 0
        },
        {
          id: 330,
          date: '2019-01-24',
          dateString: 'Thursday, January 24',
          drinks: 0
        },
        {
          id: 331,
          date: '2019-01-25',
          dateString: 'Friday, January 25',
          drinks: 0
        },
        {
          id: 332,
          date: '2019-01-26',
          dateString: 'Saturday, January 26',
          drinks: 0
        },
        {
          id: 333,
          date: '2019-01-27',
          dateString: 'Sunday, January 27',
          drinks: 0
        },
        {
          id: 334,
          date: '2019-01-28',
          dateString: 'Monday, January 28',
          drinks: 0
        },
        {
          id: 335,
          date: '2019-01-29',
          dateString: 'Tuesday, January 29',
          drinks: 0
        },
        {
          id: 336,
          date: '2019-01-30',
          dateString: 'Wednesday, January 30',
          drinks: 0
        },
        {
          id: 337,
          date: '2019-01-31',
          dateString: 'Thursday, January 31',
          drinks: 0
        },
        {
          id: 338,
          date: '2018-02-01',
          dateString: 'Thursday, February 1',
          drinks: 1
        },
        {
          id: 339,
          date: '2018-02-02',
          dateString: 'Friday, February 2',
          drinks: 0
        },
        {
          id: 340,
          date: '2018-02-03',
          dateString: 'Saturday, February 3',
          drinks: 2
        },
        {
          id: 341,
          date: '2018-02-04',
          dateString: 'Sunday, February 4',
          drinks: 0
        },
        {
          id: 342,
          date: '2018-02-05',
          dateString: 'Monday, February 5',
          drinks: 0
        },
        {
          id: 343,
          date: '2018-02-06',
          dateString: 'Tuesday, February 6',
          drinks: 3
        },
        {
          id: 344,
          date: '2018-02-07',
          dateString: 'Wednesday, February 7',
          drinks: 0
        },
        {
          id: 345,
          date: '2018-02-08',
          dateString: 'Thursday, February 8',
          drinks: 1
        },
        {
          id: 346,
          date: '2018-02-09',
          dateString: 'Friday, February 9',
          drinks: 1
        },
        {
          id: 347,
          date: '2018-02-10',
          dateString: 'Saturday, February 10',
          drinks: 0
        },
        {
          id: 348,
          date: '2018-02-11',
          dateString: 'Sunday, February 11',
          drinks: 0
        },
        {
          id: 349,
          date: '2018-02-12',
          dateString: 'Monday, February 12',
          drinks: 0
        },
        {
          id: 350,
          date: '2018-02-13',
          dateString: 'Tuesday, February 13',
          drinks: 2
        },
        {
          id: 351,
          date: '2018-02-14',
          dateString: 'Wednesday, February 14',
          drinks: 0
        },
        {
          id: 352,
          date: '2018-02-15',
          dateString: 'Thursday, February 15',
          drinks: 1
        },
        {
          id: 353,
          date: '2018-02-16',
          dateString: 'Friday, February 16',
          drinks: 2
        },
        {
          id: 354,
          date: '2018-02-17',
          dateString: 'Saturday, February 17',
          drinks: 0
        },
        {
          id: 355,
          date: '2018-02-18',
          dateString: 'Sunday, February 18',
          drinks: 0
        },
        {
          id: 356,
          date: '2018-02-19',
          dateString: 'Monday, February 19',
          drinks: 1
        },
        {
          id: 357,
          date: '2018-02-20',
          dateString: 'Tuesday, February 20',
          drinks: 0
        },
        {
          id: 358,
          date: '2018-02-21',
          dateString: 'Wednesday, February 21',
          drinks: 0
        },
        {
          id: 359,
          date: '2018-02-22',
          dateString: 'Thursday, February 22',
          drinks: 0
        },
        {
          id: 360,
          date: '2018-02-23',
          dateString: 'Friday, February 23',
          drinks: 3
        },
        {
          id: 361,
          date: '2018-02-24',
          dateString: 'Saturday, February 24',
          drinks: 0
        },
        {
          id: 362,
          date: '2018-02-25',
          dateString: 'Sunday, February 25',
          drinks: 0
        },
        {
          id: 363,
          date: '2018-02-26',
          dateString: 'Monday, February 26',
          drinks: 1
        },
        {
          id: 364,
          date: '2018-02-27',
          dateString: 'Tuesday, February 27',
          drinks: 1
        },
        {
          id: 365,
          date: '2018-02-28',
          dateString: 'Wednesday, February 28',
          drinks: 0
        }
      ]);
    });
};

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
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 33,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 34,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 35,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 36,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 37,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 38,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 39,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 40,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 41,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 42,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 43,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 44,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 45,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 46,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 47,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 48,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 49,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 50,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 51,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 52,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 53,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 54,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 55,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 56,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 57,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 58,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 59,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 60,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 61,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 62,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 63,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 64,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 65,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 66,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 67,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 68,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 69,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 70,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 71,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 72,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 73,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 74,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 75,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 76,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 77,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 78,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 79,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 80,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 81,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 82,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 83,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 84,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 85,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 86,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 87,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 88,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 89,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 90,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 91,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 92,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 93,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 94,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 95,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 96,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 97,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 98,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 99,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 100,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 101,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 102,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 103,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 104,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 105,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 106,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 107,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 108,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 109,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 110,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 111,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 112,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 113,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 114,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 115,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 116,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 117,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 118,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 119,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 120,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 121,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 122,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 123,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 124,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 125,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 126,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 127,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 128,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 129,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 130,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 131,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 132,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 133,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 134,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 135,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 136,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 137,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 138,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 139,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 140,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 141,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 142,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 143,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 144,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 145,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 146,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 147,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 148,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 149,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 150,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 151,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 152,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 153,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 154,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 155,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 156,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 157,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 158,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 159,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 160,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 161,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 162,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 163,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 164,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 165,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 166,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 167,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 168,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 169,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 170,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 171,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 172,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 173,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 174,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 175,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 176,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 177,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 178,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 179,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 180,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 181,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 182,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 183,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 184,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 185,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 186,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 187,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 188,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 189,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 190,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 191,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 192,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 193,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 194,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 195,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 196,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 197,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 198,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
        {
          id: 199,
          date: '2018-',
          dateString: '',
          drinks: 0
        },
      ]);
    });
};

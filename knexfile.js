module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///sipster'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

require('dotenv').config();
const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
  },
  production: {
    username: 'postgres',
    password: '123456',
    database: 'binar_challenge_8_production',
    host: 'https://binar-challenge-8-production.up.railway.app',
    port: '5432',
    dialect: 'postgres'
  }
}

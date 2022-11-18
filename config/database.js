// require('dotenv').config();
const {
  DB_USER = 'postgres',
  DB_PASSWORD = '123456',
  DB_NAME = 'binar_challenge_8',
  DB_HOST = 'localhost',
  DB_PORT = '5432',
  DB_DIALECT = 'postgres',
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
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
  }
}

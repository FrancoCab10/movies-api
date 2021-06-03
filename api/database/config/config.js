module.exports = {
  development: {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'test',
    database: 'movies_db',
  },
  test: {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'test',
    database: 'movies_db',
  },
  production: {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'test',
    database: 'movies_db',
  }
}

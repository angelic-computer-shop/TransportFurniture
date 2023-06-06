const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'API',
    password: 'Letsdoit!',
    port: 5433,
  })
  
pool.on('connect', () => {
  console.log('Database connected successfuly!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
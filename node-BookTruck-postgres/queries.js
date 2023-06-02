const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'BookTruck',
  password: 'password',
  port: 5432,
})


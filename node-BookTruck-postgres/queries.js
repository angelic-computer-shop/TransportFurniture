const Pool = require('pg').Pool
const pool = new Pool({
  user: 'posgres',
  host: 'localhost',
  database: 'BookTruck',
  password: 'password',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM persons ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM drivers WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  
  
  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO drivers (name, surname,cellno, address, password, confirmpassword,email,idno,regno) VALUES ($1, $2,$3,,$4,$5,$6,$7,$8,$9)', [name, surname,cellno, address, password, confirmpassword,email,idno,regno], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }
  
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE drivers SET name=$1, surname=$2,cellno=$3, address=$4, password=$5, confirmpassword=$6,email=$7,idno=$8,regno=$9 WHERE id = $11',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM drivers WHERE id = $11', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }
  


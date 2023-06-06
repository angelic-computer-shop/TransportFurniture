const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'API',
  password: 'Letsdoit!',
  port: 5433,
})

//get user info
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //get driver info
  const getDriver = (request, response) => {
    pool.query('SELECT * FROM drivers ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //get user by id
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
//get driver by id
const getDriverById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM drivers WHERE id = $9', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


  //Create user
  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }
  
  //create driver
  const createDriver = (request, response) => {
    const { name,surname,idno,trucktype,licenseno,cellno, email,password,id } = request.body
  pool.query('INSERT INTO drivers (name,surname,idno,trucktype,licenseno,cellno, email,password,id) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9)', [name,surname,idno,trucktype,licenseno,cellno, email,password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Driver added with ID: ${results.insertId}`)
  })
  }

  //Update user info
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  //Update driver info
  const updateDriver = (request, response) => {
    const id = parseInt(request.params.id)
    const { name,surname,idno,trucktype,licenseno,cellno, email,password,  } = request.body
  
    pool.query(
      'UPDATE drivers SET name= $1,surname= $2,idno= $3,trucktype= $4,licenseno= $5,cellno= $6, email= $7,password= $8  WHERE id = $9',
      [name,surname,idno,trucktype,licenseno,cellno, email,password,id ],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Driver modified with ID: ${id}`)
      }
    )
  }

  //delete user
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE idno = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

   //delete drivers
  
   const deleteDriver = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM drivers WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Driver deleted with ID: ${id}`)
    })
  }
  
  module.exports = {

    //module export for user
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,

// module export for driver
    getDriver,
   getDriverById,
    createDriver,
   updateDriver,
   deleteDriver,
  }
  
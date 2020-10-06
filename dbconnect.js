const pg = require('pg');

const config = {
  user: 'postgres', //this is the db user credential
  database: 'Artifie_Attendance',
  password: '123456',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});

//export pool and createTables to be accessible  from an where within the application
module.exports = {
    pool,
  };
  
  require('make-runnable');








// const { Pool, Client } = require('pg');

// const connectionstring = 'postgressql://postgres:123456@localhost:5432/Artifie_Attendance'

// const client = new Client({
//     connectionString: connectionstring
// });

// client.connect();
// // client.query('SELECT * FROM "Attendance"', (err, res) => {
// //     console.log(res.rows)
// //     client.end()
// // })
// module.exports.client= client;

// client.query('SELECT * FROM Attendance',(err,res)=>{
//     // console.log(res.rows);
//   module.exports.todos = res.rows; 
// })
//    client.query('SELECT * FROM login WHERE email="Arvind@gmail.com"',(err,res)=>{
//       //console.log(res.rows)
//         module.exports.User= res
//        })    
 
   



// const config = require('config.json');
// const { Sequelize } = require('sequelize');

// module.exports = db = {};

// initialize();

// async function initialize() {
//     // create db if it doesn't already exist
//     const { host, port, user, password, database } = config.database;
//     const connection = await mysql.createConnection({ host, port, user, password });
//     await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

//     // connect to db
//     const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

//     // init models and add them to the exported db object
//     db.User = require('../users/user.model')(sequelize);

//     // sync all models with database
//     await sequelize.sync();
// }















// const pg = require('pg');
// const { Sequelize } = require('sequelize');

// // // Option 1: Passing a connection URI
//  const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/Artifie_Attendance') // Example for postgres


// // // Option 2: Passing parameters separately (other dialects)
// // const sequelize = new Sequelize('database', 'username', 'password', {
// // //   host: 'localhost',
// // //   dialect:  'postgres'
// // // });
 
  
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


//  sequelize.close();

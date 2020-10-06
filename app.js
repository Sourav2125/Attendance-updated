const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var {User, pool}= require('./dbconnect/dbconnect');
var todos= require('./dbconnect/dbconnect');
const cors = require('cors');
const bodyparser = require('body-parser');
const { Router } = require('express');
var app = express();


app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

process.env.SECRET_KEY = 'secret';


// const isLoggedIn = (req, res, next) => {
//       if(req.isAuthenticated()){
//           return next()
//       }
//       return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
//   }



/*---------Sign In Api----------*/

    app.post('/signIn', (req, res) => {
        const data = {
            email : req.body.username,
            password : req.body.password,
          }
         pool.connect((err, client, done) => {
            const query = 'SELECT * FROM login WHERE username= $1 AND password = $2';
            const values = [data.email,data.password];
        
            client.query(query, values, (error, result) => {
              done();
              if (error) {
                return res.status(400).json(error);
              } else if(result.rows.length>0){
                  console.log("success",result.rows.length)
                res.status(200).send({
                    status: 'Successful',
                    results: result.rows
                  });
              } else{
                res.status(404).send({
                    status: 'Failed',
                  });
              }
              
            });
           });
        
        })


/*----------Get Data Api-----------*/
app.get('/getData',function(req,res){
    pool.connect((err, client, done) => {
        const query = 'SELECT * FROM Attendance';
        client.query(query, (error, result) => {
          done();
          if (error) {
            res.status(400).json({error})
          } 
          if(result.rows < '1') {
            res.status(404).send({
            status: 'Failed',
            message: 'No information found',
            });
          } else {
            res.status(200).send({
            status: 'Successful',
            message: 'Employee Details retrieved',
            todos: result.rows,
            
            });
          }
        });
      });
    });
    
    


 app.listen(3500, ()=>{
      console.log("Node Server is listening on port 3000......Please open the browser..");
})
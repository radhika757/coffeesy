const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001;
const mysql = require('mysql2');

app.use(express.json());
app.use(cors('http://localhost:3000/'));

const connection = mysql.createConnection({
    user:"root",
    host: "localhost",
    port: "3306",
    password: "password",
    database:"coffeesy",
});

connection.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('Database connected');
    }
});

app.listen(port,()=>{
    console.log('Server started at port:'+port);
})
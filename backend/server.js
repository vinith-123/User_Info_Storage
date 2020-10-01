const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'admin',
    database: 'userdb'
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post('/api/insert',(req,res)=>{
    const name=req.body.name;
    const age=req.body.age;
    const sport=req.body.sport;
    const sqlInsert = "INSERT INTO userinfo (Name, Age, Sport) VALUES (?,?,?)";
    console.log(sqlInsert);
    db.query(sqlInsert,[name,age,sport],(err,result)=>{
        if(err)
            throw err;
        console.log(result);
        res.send('<h1>Successfully Inserted</h1>');
    });
});
app.get('/api/get',(req,res)=>{
    const sqlGet = "SELECT * FROM userinfo";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    });
});
app.get('/',(req,res)=>{
    const sqlGet = "SELECT * FROM userinfo";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    });
});
app.listen('3001',()=>{
    console.log('Started listening on port 3001');
});
const express = require('express');
const axios = require('axios');
// const cors = require('cors');
const path = require('path');



const app = express();
// app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req,res) =>{
    res.send("<h1>HomePage</h1>");
});

app.get('/users', (req,res) =>{
    axios.get('https://randomuser.me/api/?page=1&results=10')
    .then(response=>{
        res.send(response.data);
    });
});

app.listen(3000, ()=>{console.log("Server Raunning on http://localhost:3000")});
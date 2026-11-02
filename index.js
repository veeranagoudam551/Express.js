import express from 'express';
import home from './home.js';
import login from './login.js';
import submit from './submit.js';

const app = express();

app.get('/', (req,res) =>{
    res.send(home());
})
app.get('/home', (req,res) =>{
    res.send(home());
})
app.get('/login', (req,res) =>{
    res.send(login());
})
app.post('/submit',(req,res) =>{
    res.send(submit())
})
app.listen(3300,() =>{
    console.log("Server is running on port 3300");
})

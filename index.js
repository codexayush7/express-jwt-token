const express = require('express');
const app = express();
const bodyParser = require("express");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwt = require('jsonwebtoken');
const user = {
    id: 1,
    email: 'user@example.com',
    password: '123456'
};
const secret = '123456';


const token = jwt.sign(user, secret, {expiresIn: '7d'});
console.log(token);


const verifyToken = jwt.verify(token, secret, (err,decode)=>{
    if(err){
        console.log(err);
    }else{
        console.log(decode);
    }
});
// app.get('/', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//
//     if (username === user.email && password === user.password) {
//         const token = jwt.sign({
//             id: user.id,
//             email: user.email
//         },secret, {expiresIn: '7d'});
//         return res.json({ message: 'Login successful', token });
//     }
//
//     res.status(401).json({ message: 'Invalid credentials' });
// });
//
//
//
//
//
// app.listen(9090,()=>{
//     console.log('Express server listening on port 9090...');
// });

app.get('/', (req, res)=>{
    console.log(req.header());
})
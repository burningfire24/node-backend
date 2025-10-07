
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });



const KEY=process.env.KEY;


function jwttoken(req,res,next){
    const Cred={
        email:req.body.email,
        passcode:req.body.passcode
    }
    res.send(jwt.sign(Cred,KEY)); 
    next();
}


// const token=jwt.sign(cred,KEY);
// const cred={
//     email:'brishke@gmail.com',
//     passcode:'Phone@2022#'
// }

// const token=jwt.sign(cred,KEY);

// console.log(token);

// const decoded=jwt.verify(token,KEY);

// console.log(decoded);

module.exports={
    jwttoken
}
const express = require('express');
const cors = require('cors')
const {validateMiddleware}=require('./Middelwares/validateMiddleware')
const {jwttoken} =require('./Middelwares/jwt');
const {}=require('./DB/mongoConnection')



require('dotenv').config();



const app= express();


//env or key variables
const PORT= process.env.PORT || 3000;


//middlewares
app.use(express.json());
app.use(cors());


//routes
app.get('/getdata',(req,res)=>{

    //validate the input data

    //authenticate the input data

    //get data from the DB
})

app.post('/adddata',validateMiddleware,jwttoken,(req,res)=>{

    
    console.log('everything is fine and your data is added to the DB');
    //authenticate the input data
    
    //add data in the db
})

app.put('/updatedata',()=>{
    
    //validate the input data

    //authenticate the input data
    //update data in DB
})

app.delete('/deletedata',()=>{
    
    //validate the input data

    //authenticate the input data

    
    //deletdata
})





app.listen(PORT,function(){
    console.log(`app is running on port ${PORT}`);

});


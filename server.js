const express = require('express');
const cors = require('cors')
const {validateMiddleware}=require('./Middelwares/validateMiddleware')
const {jwttoken} =require('./Middelwares/jwt');
const {AddData}=require('./DB/addData');




require('dotenv').config();



const app= express();


//env or key variables
const PORT= process.env.PORT || 3000;


//middlewares
app.use(express.json());
app.use(cors());

// Initialize middlewareData for all requests
app.use((req, res, next) => {
    req.middlewareData = []; // create a shared array
    next();
});




//routes
app.get('/getdata',(req,res)=>{

    //validate the input data

    //authenticate the input data

    //get data from the DB
})

app.post('/adddata',validateMiddleware,jwttoken,AddData,(req,res)=>{

    
    console.log('everything is fine and your data is added to the DB');
    res.status(200).json({
        success:true,
        response:req.middlewareData
    })
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





// Error handling middleware (must be last)
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        error: err.message || 'Internal Server Error'
    });
});

app.listen(PORT,function(){
    console.log(`app is running on port ${PORT}`);

});


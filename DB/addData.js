const mongooes=require('mongoose');
const {db_model}=require('./dbSchema');
const {main}=require('./mongoConnection');

async function AddData(req,res,next){
    try {
        await main();
        const add = await db_model.create({
            name: req.body.name,
            email: req.body.email,
            passcode: req.body.passcode
        });
        req.middlewareData.push(add);
        
        //('✅ User added:', add); // send  status code for server to send status to frontend
        // await mongooes.connection.close();
        next();

    }catch (err) {
        //send status code for server
        console.log('❌ Error:', err);
    }

    
}

module.exports={
    AddData
}


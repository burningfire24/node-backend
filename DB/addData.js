const mongooes=require('mongoose');
const {db_model}=require('./dbSchema');
const {main}=require('./mongoConnection');

async function AddData(req,res,next){
    try {
        main();
        const add = await db_model.create({
            name: 'brish',
            age: 40,
            email: 'brish@example.com'
        });
        console.log('✅ User added:', add);
        
        //('✅ User added:', add); // send  status code for server to send status to frontend
        await mongooes.connection.close();
        next();

    }catch (err) {
        //send status code for server
        console.log('❌ Error:', err);
    }

    
}

module.exports={AddData};
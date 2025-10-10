const mongoose=require('mongoose');

    const db_schema=new mongoose.Schema({
        name:{type:String},
        email:{type:String,require:true},
        passcode:{type:String, require:true},
        link:{type:String},
        createdAt: { type: Date, default: Date.now }
    });


    
    const db_model=new mongoose.model('Users',db_schema);
    
    module.exports={
        db_model
    }

    
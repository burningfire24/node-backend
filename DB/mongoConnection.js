const mongooes=require('mongoose');
const { string, url } = require('zod');

async function main() {
    async function DBconnector(){
        await mongooes.connect('mongodb+srv://life:lkj19ltBmVlFDVjA@cluster0.aw3j9m4.mongodb.net');

    }


    DBconnector().catch(function(err){
        console.log(err);
    });

    const db_schema=new mongooes.Schema({
        name:string,
        email:{type:string,require:true},
        passcode:{type:string, require:true},
        link:string,
        createdAt: { type: Date, default: Date.now }
    });

    const db_model=new mongooes.model('Users',db_schema);

    await db_model.create({ name: 'Amit', age: 30, email: 'amit@example.com' });

    console.log('everything');
}

main();

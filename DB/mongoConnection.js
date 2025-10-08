const mongooes=require('mongoose');

async function main() {
    async function DBconnector(){
        await mongooes.connect('mongodb+srv://life:lkj19ltBmVlFDVjA@cluster0.aw3j9m4.mongodb.net');

    }

    DBconnector().then(function(){
        //send status code to server
        console.log('connected');
    }).catch(function(err){
        //send status code to server
        console.log(err);
    });

}

module.exports={
    main
}


const {data} = require('./validation') 

function validateMiddleware(req,res,next){
    const result=data.safeParse(req.body);
    if(result.success){
        req.middlewareData.push("success");
        next();
    }
    else{
        const err=JSON.parse(result.error.message);
        res.send(err[0].message);
    }
     
}

module.exports={validateMiddleware};
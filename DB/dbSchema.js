

    const db_schema=new mongooes.Schema({
        name:string,
        email:{type:string,require:true},
        passcode:{type:string, require:true},
        link:string,
        createdAt: { type: Date, default: Date.now }
    });

    const db_model=new mongooes.model('Users',db_schema);

    

    
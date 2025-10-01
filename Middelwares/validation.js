const {z} = require('zod');

const data=z.object({
    name:z.string(),
    email:z.email(),
    passcode: z.string()
               .min(8, 'minimum 8 characters long')
               .regex(/(?=.*[!@#$%^&*])/, 'must include at least one special character')
               .regex(/(?=.*[0-9])/, 'must include at least one number'),
    link:z.url()          
    
})

module.exports={data};


const axios=require('axios');




async function linkClik(){
    const data= await axios({
        method: 'post',
        url: 'http://localhost:4000/adddata',
        data: {
            name:"brishke",
            email:"brishk@gmail.com",
            passcode:"1bskldf@dobh",
            link:"http://goofle.com"
        }
      });

      const token=await data;
      console.log(data.data)
}

linkClik();




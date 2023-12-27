const express = require('express');
const app = express();
const dotenv = require('dotenv')


dotenv.config()
const PORT = process.env.PORT || 5000;



app.use(express.json());
app.use(express.urlencoded({extended:true}))


const connectionParams={
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true

}



app.get('/',(req,res)=>{
    res.json({

        status:200,
        message:"your server is up and running ",
        uri: uri
    })

})

app.get('home',(req,res)=>{
    res.json("this is a home router")

})


app.listen(PORT, ()=>{
console.log(`listening on port number -> ${PORT}`);

})
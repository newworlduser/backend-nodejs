const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config()
const PORT = process.env.PORT || 5000;
const uri=`mongodb+srv://${process.env.DBUSER}:${process.env.PASS}@cluster0.iqb3ny3.mongodb.net/?retryWrites=true&w=majority`



app.use(express.json());
app.use(express.urlencoded({extended:true}))


const connectionParams={
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true

}
mongoose.connect(uri).then(()=>{
    console.log('connected to db...')
}).catch((err)=>{
    console.error(`Error connecting to the db \n${err}`)

})


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
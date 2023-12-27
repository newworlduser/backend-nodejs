const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const db = require('./db.config')
const PORT = process.env.PORT || 5000;
const userRouter = require('./controller/user.controller')


app.use(express.json());
app.use(express.urlencoded({extended:true}))
db.dbConfig();



app.get('/',(req,res)=>{
    res.json({

        status:200,
        message:"your server is up and running ",
    })

})
app.use('/api/v1/users',userRouter)

app.get('/home',(req,res)=>{
    res.json("this is a home router...")
})

app.listen(PORT,()=>{
    console.log(`listening on port number -> ${PORT}`);
})
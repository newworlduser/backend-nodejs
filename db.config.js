
const mongoose = require('mongoose');
const uri=`mongodb+srv://${process.env.DBUSER}:${process.env.PASS}@cluster0.iqb3ny3.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(uri).then(()=>{
    console.log('connected to db...')
}).catch((err)=>{
    console.error(`Error connecting to the db \n${err}`)

})
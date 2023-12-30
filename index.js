const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const cors = require('cors')
const app = express();
const db = require('./db.config')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;
// controller import 
const userRouter = require('./controller/user.controller')
const blogRouter = require('./controller/blog.controller')
const authRouter = require('./controller/auth.controller.')

app.use(cors())
app.use(bodyParser.json());
// app.use(express.json()); // middleware...
app.use(express.urlencoded({extended:true}))
db.dbConfig();

app.get('/',(req,res)=>{
    res.json({
        status: 200,
        message:"your server is up and running"
    })
})
app.use('/api/v1/users',userRouter)
// app.use('/api/v1/orders')
// app.use('/api/v1/employees')
app.use('/api/v1/blogs',blogRouter)
app.use('/api/v1/auth',authRouter)
// app.use('/api/v1/post')

app.listen(PORT,()=>{
    console.log(`listening on port number -> ${PORT}`);
})


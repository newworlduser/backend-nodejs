const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.json("get all users information")
})

router.get("/:id",(req,res,next)=>{
    res.json("get user information")
})


router.delete("/:id",(req,res,next)=>{
    res.json("delete user information")
})

router.delete("/",(req,res,next)=>{
    res.json("delete all users information")
})

router.post("/",(req,res,next)=>{
    res.json("insert user information")
})

router.put("/:id",(req,res,next)=>{
    res.json("update user information")
})
module.exports=router;
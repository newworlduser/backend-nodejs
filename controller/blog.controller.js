const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");


// middleware
const auth = (req,res,next) =>{
  console.log("this is a middleware")
  next();
}

router.get("/", auth ,(req, res) => {
  res.json({
    status: 200,
    message:"your server is up and running"
  })
});

module.exports = router;
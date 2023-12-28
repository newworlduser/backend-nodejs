const mongoose = require('mongoose');
const userSchema=mongoose.Schema(
    {
    firstName:{type: String},
    lastName:{type: String},
    dept:{type: String},
    age:{type: Number}
    },
     {timestamp:true}
);
module.exports=mongoose.model('User',userSchema)
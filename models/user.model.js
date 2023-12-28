const mongoose = require('mongoose');
const userSchema={
    firstName:{type: String},
    lastName:{type: String},
    dept:{type: String},
    age:{type: Number}
};
module.exports=mongoose.model('User',userSchema)
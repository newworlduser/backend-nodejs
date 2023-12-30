const mongoose = require('mongoose');
const authSchema = mongoose.Schema(
    {
        firstName: {type : String},
        lastName: {type : String},
        email: {type : String,unique : true},
        password: {type : String}
    },
    {timestamps:true}
);

module.exports = mongoose.model('Auth',authSchema)
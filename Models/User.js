const mongoose = require('mongoose')

const userschema = new mongoose.Schema(
    {
        name : String,
        email:{type:String, unique:true, required: true},
        password :{type:String , required:true},
        role : String
    }
)
module.exports=mongoose.model('Damin',userschema)
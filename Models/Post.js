const mongoose= require('mongoose')

const PostSchema= new mongoose.Schema(
    {
        profession : String,
        picture:String,
        descr:String,
        owner:{type : mongoose.Types.ObjectId,ref:'Damin'}
    }
)
module.exports=mongoose.model('post',PostSchema)
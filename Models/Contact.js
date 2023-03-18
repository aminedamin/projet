const mongoose= require('mongoose')

const ContactSchema = new mongoose.Schema(
    {
       
        idPost : {type : mongoose.Types.ObjectId,ref:'post'},
        idPoster:{type : mongoose.Types.ObjectId,ref:'Damin'},
        status : String
    }
)

module.exports=mongoose.model('contact',ContactSchema)
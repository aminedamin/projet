
const mongoose= require('mongoose')

const ConnectDB=async()=>{
    try {
           mongoose.set('strictQuery', true)
        await mongoose.connect( process.env.URI)
        console.log('DB Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports= ConnectDB
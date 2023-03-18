const User = require("../Models/User")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.singUp=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})
        if(found){
            return res.status(400).send({errors : [{msg : "mail used"}]})
        }

        const newUser = new User(req.body)

        const salt = 10
        const hash = bcrypt.hashSync(password, salt)

        newUser.password = hash

        await newUser.save()
        const payload = {id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey)

        res.status(200).send({msg : "User added",newUser,token})
    } catch (error) {
        res.status(500).send({errors:[{msg:'could not singup'}]}) 
    }

}

exports.singIn=async(req,res)=>{
   try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(!found){
            res.status(400).send({errors : [{msg : "User not found"}]})
        }

        const matched = bcrypt.compareSync(password, found.password);

        if(!matched){
            res.status(400).send({errors : [{msg : "Wrong password"}]})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey)

        res.status(200).send({msg : "User logged",found,token})
   } catch (error) {
        res.status(500).send({errors:[{msg:'could not singIn'}]}) 
   }

}

exports.addUser=async(req,res)=>{
try {
    const found= await User.findOne({email:req.body.email})
    if(found){
        return res.status(400).send('contact already exists')
    }
    const newUser= new User(req.body)
    await newUser.save()
    res.status(200).send({Msg:'contact added',newUser})
} catch (error) {
    res.status(500).send('could not add user')
}

}
exports.readUsers=async(req,res)=>{
    try {
        const users= await User.find()
        res.status(200).send({Msg: ' list Users',users})
    } catch (error) {
        res.status(500).send('could not get users')
    }
}

exports.deleteUser=async(req,res)=>{
    try {
        const {id}=req.params
        await User.findByIdAndDelete(id)
     res.status(200).send({Msg:'user deleted'})
    } catch (error) {
        res.status(500).send('user could not deleted')
    }

}

exports.updateUser=async(req,res)=>{
    try {
        const {id}=req.params
        await User.findByIdAndUpdate(id,{$set: req.body})
        res.status(200).send({Msg:'User updated '})
    } catch (error) {
        res.status(500).send('user could not update')
    }
}
exports.readUser=async(req,res)=>{
try {
    const {id}=req.params
    const oneUser= await User.findById(id)
    res.status(200).send({Msg:'the user is ', oneUser})
} catch (error) {
    res.status(500).send('could not get user')
}

}
const express= require('express')
const { singUp, singIn, addUser, readUsers, deleteUser, updateUser, readUser } = require('../Controllers/User')
const isAuth = require('../Middelwares/isAuth')
const { registerValidation, Validation, logginValidation } = require('../Middelwares/Validator')


const userRouter= express.Router()

userRouter.post('/singUp',singUp)
userRouter.post('/singIn',singIn)
userRouter.get('/currentUser',isAuth,(req,res)=>res.send(req.user))
// userRouter.post('/addUser',addUser)
userRouter.get('/readUsers',readUsers)
userRouter.delete('/deleteUser/:id',deleteUser)
userRouter.put('/updateUser/:id',updateUser)
userRouter.get('/readUser/:id',readUser)



module.exports =userRouter
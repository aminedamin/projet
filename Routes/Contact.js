const express=require('express')
const { addContact, readContacts, updateContact, deleteContact, readoneContact, GetMyContact, GetAllContact } = require('../Controllers/Contact')
const isAuth = require('../Middelwares/isAuth')

const ContactRouter=express.Router()

ContactRouter.post('/addcontact',isAuth,addContact)
ContactRouter.get('/getMyContact',isAuth,GetMyContact)
ContactRouter.get('/getAllContact',GetAllContact)
// ContactRouter.get('/getOwnerContact',isAuth,GetMyContact)
ContactRouter.put('/updateContact/:id',updateContact)
ContactRouter.delete('/deleteContact/:id',deleteContact)

module.exports=ContactRouter

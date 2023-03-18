const express=require('express')
const { addPost, readPost, deletePost, updatePost, readPosts } = require('../Controllers/Post')
const isAuth = require('../Middelwares/isAuth')

const PostRouter=express.Router()



PostRouter.post('/addPost',isAuth,addPost)
PostRouter.get('/readPosts',readPosts)
PostRouter.delete('/deletePost/:id',deletePost)
PostRouter.put('/updatePost/:id',updatePost)
PostRouter.get('/readPost/:id',readPost)

module.exports = PostRouter
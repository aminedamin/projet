const Post = require("../Models/Post")

exports.addPost=async(req,res)=>{
    try {
        // const found= await Post.findOne({profession:req.body.profession})
        // if(found){
        //     return res.status(400).send('Post already exists')
        // }
        const newPost= new Post({...req.body,owner : req.user._id})
        await newPost.save()
        res.status(200).send({Msg:'Post added',newPost})
    } catch (error) {
        res.status(500).send('could not add user')
    }
    
    }
    exports.readPosts=async(req,res)=>{
        try {
            const Posts= await Post.find().populate('owner')
            res.status(200).send({Msg: ' list Post',Posts})
        } catch (error) {
            res.status(500).send('could not get Post')
        }
    }
    
    exports.deletePost=async(req,res)=>{
        try {
            const {id}=req.params
            await Post.findByIdAndDelete(id)
         res.status(200).send({Msg:'Post deleted'})
        } catch (error) {
            res.status(500).send('Post could not deleted')
        }
    
    }
    
    exports.updatePost=async(req,res)=>{
        try {
            const {id}=req.params
            await Post.findByIdAndUpdate(id,{$set: req.body})
            res.status(200).send({msg :"Post updated"})
        } catch (error) {
            res.status(500).send('Post could not update')
        }
    }
    exports.readPost=async(req,res)=>{
    try {
        const {id}=req.params
        const onePost= await Post.findById(id)
        res.status(200).send({Msg:'the Post is ', onePost})
    } catch (error) {
        res.status(500).send('could not get Post')
    }
    
    }
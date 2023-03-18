const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const ContactRouter = require('./Routes/Contact')
const PostRouter = require('./Routes/Post')
const userRouter = require('./Routes/User')

const app = express()




require('dotenv').config()


ConnectDB()
app.use(express.json())
app.use('/api/auth',userRouter)
app.use('/api/post',PostRouter)
app.use('/api/contact',ContactRouter)


app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port}`))
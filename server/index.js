import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auths.js"
import usersRoute from "./routes/users.js"
import filesRoute from "./routes/files.js"
import cors from 'cors'

const app = express()
dotenv.config()

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
    } catch (error) {
        console.log(error)
    }
};


app.get('/', (req, res)=>{
    res.send("Hello First request")
})

mongoose.connection.on("connected", ()=>{
    console.log("Database connected")
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/auth', authRoute)
app.use('/users', usersRoute)
app.use('/files', filesRoute)

app.use((err,req,res,next)=>{
    const errorMessage = err.message || "Something went wrong"
    const errorStatus = err.status || 500

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.listen(8800, ()=>{
    connect();
    console.log('app is running!')
})
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './src/routes/usersRoutes.js'

dotenv.config()

const app=express()

const PORT=process.env.PORT || 3500

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',userRouter)

app.use(cors)



app.listen(PORT,()=>{
    console.log(`This app is running on port ${PORT}`);
})
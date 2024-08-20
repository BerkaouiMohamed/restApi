const express=require('express')
const { default: mongoose } = require('mongoose')
const authRouter = require('./routers/authRouter')
const todosRouter = require('./routers/todosRouter')
require('dotenv').config()



require('./utils/dbConnection')()

const app=express()
app.use(express.json())

app.use("/api/auth",authRouter)

app.use("/api/todos",todosRouter)


app.all("*",(req,res,next)=>{
    res.json({status:"error",message:"404 not found"})
})

app.use((error,req,res,next)=>{
    res.json({status:"error",message:error.message})
})
mongoose.connection.once('open',()=>{
    app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT}`))
})
mongoose.connection.on('error',()=>    process.exit(0))




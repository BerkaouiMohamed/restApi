const mongoose=require('mongoose')



module.exports=async()=>{
try {
    await mongoose.connect(process.env.MONGO_URI,{dbName:"todo4"})
    console.log('connected to db ')
    
} catch (error) {
    console.log(error)

}
}
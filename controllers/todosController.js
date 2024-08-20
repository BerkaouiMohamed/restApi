const asyncHandler = require("../utils/asyncHandler");
const todoModel=require('../models/todoModel')

module.exports={
    addTodo:asyncHandler(async(req,res)=>{
        const decode=req.headers.decode
        const todo=await todoModel.create({...req.body,userId:decode._id})
        res.json({status:"success",data:todo})
    }),
    getUserTodos:asyncHandler(async(req,res)=>{
        const decode=req.headers.decode
        const todos=await todoModel.find({userId:decode._id})
        res.json({status:"success",data:todos})
    }),
    getsingleTodo:asyncHandler(async(req,res)=>{
        const todoId=req.params.id
        const decode=req.headers.decode
        
        const todos=await todoModel.findOne({userId:decode._id,_id:todoId})
        res.json({status:"success",data:todos})
    }),
    deleteTodo:asyncHandler(async(req,res)=>{
        const todoId=req.params.id
        const decode=req.headers.decode
        const role=req.user.role
        const todos=await todoModel.deleteOne({userId:decode._id,_id:todoId})
        res.json({status:"success",data:todos})
    }),
    updateTodo:asyncHandler(async(req,res)=>{
        const todoId=req.params.id
        const decode=req.headers.decode
        const role=req.headers.role
        var todo
        if(role==="admin"){
         todo=await todoModel.updateOne({_id:todoId},{$set:{...req.body}},{runValidators: true})

        }
        else{

         todo=await todoModel.updateOne({userId:decode._id,_id:todoId},{$set:{...req.body}},{runValidators: true})

        }
        
        res.json({status:"success",data:todo})
    }),
    getAllTodos:asyncHandler(async(req,res)=>{


        
        const todos=await todoModel.find()
        res.json({status:"success",data:todos})
    }),

}
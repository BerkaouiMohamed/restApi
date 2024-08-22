const { addTodo, getUserTodos, getsingleTodo, deleteTodo, updateTodo, getAllTodos, deleteTodoAdmin } = require('../controllers/todosController')
const verifAdmin = require('../utils/verifAdmin')
const verifUser = require('../utils/verifUser')

const todosRouter=require('express').Router()




todosRouter.post("/",verifUser,addTodo)
todosRouter.get("/",verifUser,getUserTodos)
todosRouter.get("/all",verifAdmin,getAllTodos)
todosRouter.get("/:id",verifUser,getsingleTodo)
todosRouter.delete("/:id",verifUser,deleteTodo)
todosRouter.delete("/admin/:id",verifAdmin,deleteTodoAdmin)
todosRouter.put("/:id",verifUser,updateTodo)
module.exports=todosRouter
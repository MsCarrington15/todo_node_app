const todo = require('../models/todo');

function insertTodo(req, res){ 
    console.log(req.body)
    todo.create(req.body)
   
   .then(function(data){
       res.status(200).json({success:true, message:'Data has been created',data:data});
    })
    .catch(function(error){
        res.status(401).json('Not created' +error.message);
    });

}

function updateTodoById(req, res){


}

function deleteTodoById(req, res){

}

function getTodoById(req, res){

}

function getAllTodos(req, res){
      todo.find({})
      .then(function(data){
          res.status(200).json({
              success: true, data})
      })
      .catch(function(err){
          res.status(404).json({
              success: false, error: 'Cant get data: '+err.message})
      })
}
module.exports = {
    insertTodo, updateTodoById, deleteTodoById, getTodoById, getAllTodos
}
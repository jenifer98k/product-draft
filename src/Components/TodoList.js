import React from 'react'
//import { FaBeer } from 'react-icons/fa';
import {FaCheckCircle} from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";
import {FaExternalLinkAlt} from "react-icons/fa";
const TodoList = ({todos,setTodos,setEditTodo}) => {
  const handleComplete=(todo)=>{
    setTodos(
      todos.map((item)=>{
        if(item.id===todo.id){
          return {...item,completed:!item.completed}
        }
        return item;
      })
    )
  }
  const handleEdit=({id})=>{
const findTodo=todos.find((todo)=>todo.id===id)
setEditTodo(findTodo)
  }
  const handleDelete=({id})=>{
    setTodos(todos.filter((todo)=>todo.id !== id))
  }
  return (
    <div>
   {todos.map((todo)=>(
    <li className='list-item p-10' key={todo.id}>
        <input type="text" value={todo.title} className="list" onChange={(event)=>event.preventDefault()}/>
  <div className=''>
    <button className="button-complete task-button" onClick={()=>handleComplete(todo)}>
    <FaCheckCircle className=' mb-5' />
   </button>
  </div >
  <div className=''>
    <button className="button-edit task-button" onClick={()=>handleEdit(todo)}>
    <FaExternalLinkAlt className='  mb-5'/>
   </button>
  </div>
  <div className=''>
    <button className="button-delete  task-button" onClick={()=>handleDelete(todo)}>
    <FaTrashAlt className=' mb-5'/>
   </button>
  </div>
    </li>
   ))}
    </div>
  
  )
}

export default TodoList
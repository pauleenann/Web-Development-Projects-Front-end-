import React from 'react'
import './ActiveCheckbox.css'

const ActiveCheckbox = ({task,handleTodo,taskStatus,key}) => {
  return (
    <label htmlFor={task}className='todo-list'>
            <input type="checkbox" name="" id={task}
            onChange={(e)=>handleTodo(e,key)} value={task}/> 
            <span>{task}</span>
    </label>
  )
}

export default ActiveCheckbox

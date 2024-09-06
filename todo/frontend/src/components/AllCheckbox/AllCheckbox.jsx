import React from 'react'
import './AllCheckbox.css'

const AllCheckbox = ({task,handleTodo,key,checked}) => {
  return (
    <label htmlFor={task}className='todo-list'>
            <input type="checkbox" name="" id={task}
            onChange={(e)=>handleTodo(e,key)} value={task} checked={checked}/> 
            <span>{task}</span>
    </label>
  )
}

export default AllCheckbox

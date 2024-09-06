import React from 'react'
import './CompletedCheckbox.css'
const CompletedCheckbox = ({task,handleTodo,key,checked,deleteTask}) => {
  return (
    <div className='completed-box'>
        <label htmlFor={task}className='todo-list'>
            <input type="checkbox" name="" id={task}
            onChange={(e)=>handleTodo(e,key)} value={task} checked={checked}/> 
            <span>{task}</span>
        </label>
        <button className='delete-task' onClick={deleteTask}><i class="fa-solid fa-trash"></i></button>
    </div>
  )
}

export default CompletedCheckbox

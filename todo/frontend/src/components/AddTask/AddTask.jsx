import React, { useState } from 'react'
import './AddTask.css'


const AddTask = ({handleChange,handleSubmit,error}) => {

    
  return (
    <div className='add-container'>
      <div>
        <input type="text" className='add-task-input' placeholder='add details' name='task' onChange={handleChange}/>
        <p className='m-0 error'>{error}</p>
      </div>
      
      <button className='add-button' onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddTask

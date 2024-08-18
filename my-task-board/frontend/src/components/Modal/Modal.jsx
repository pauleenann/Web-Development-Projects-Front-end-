import ReactDom from 'react-dom'
import './Modal.css'
import closeIcon from '../../assets/close_ring_duotone-1.svg'
import progress from '../../assets/Time_atack_duotone.svg'
import completed from '../../assets/Done_round_duotone.svg'
import wontdo from '../../assets/close_ring_duotone.svg'
import save from '../../assets/Done_round.svg'
import trash from '../../assets/Trash.svg'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Modal = ({open, close, handleChange, taskId, setTaskId, setTask, task, isAdd,setIsAdd}) => {
    const [taskInfo, setTaskInfo]= useState({})
    const taskIcons=[
        "https://emojiapi.dev/api/v1/cloud.svg",
        "https://emojiapi.dev/api/v1/love_letter.svg",
        "https://emojiapi.dev/api/v1/polar_bear.svg",
        "https://emojiapi.dev/api/v1/blossom.svg",
        "https://emojiapi.dev/api/v1/rocket.svg",
        "https://emojiapi.dev/api/v1/nazar_amulet.svg",


    ]

    useEffect(()=>{
        if(taskId){
            getTasks(taskId)
        }

    },[taskId])


    const getTasks=async(id)=>{
            try{
                const res = await axios.get(`http://localhost:8801/task/${id}`)
                // setTaskInfo(res.data[0]) 
                setTask(res.data[0])
            }catch(err){
                console.error('An error occurred: ', err)
            }
    }

    const addTask = async()=>{
        try{
            const res = await axios.post(`http://localhost:8801/task/`,task)
            setIsAdd()
            window.location.reload()
        }catch(err){
            console.error('An error occurred: ', err)
        }

    }

    const updateTask =async(id)=>{
        try{
            const res = await axios.put(`http://localhost:8801/task/${id}`,task)
            window.location.reload()
        }catch(err){
            console.error('An error occurred: ', err)
        }

    }

    const deleteTask =async(id)=>{
        try{
            const res = await axios.delete(`http://localhost:8801/task/${id}`)
            window.location.reload()
        }catch(err){
            console.error('An error occurred: ', err)
        }

    }

    if(!open){
        return null
    }

    console.log(taskId)
    
   
  return ReactDom.createPortal(
    <>
    <div className="overlay"></div>
    <div className='modal-container'>
        <div>
            <div className="modal-header">
                <p className='modal-header-text'>Task details</p>
                <button className='close-button' onClick={()=>{close(); setTaskId();}}>
                    <img src={closeIcon} alt="" />
                </button>
            </div>

            <div className="form">
                {/* input field for task name */}
                <div className="task-input">
                    <label htmlFor="task-name">Task name</label>
                    <input type="text" name='task_name' id='task-name' placeholder='Enter task name' className='task-name' onChange={handleChange} value={task.task_name || ""}/>
                </div>

                {/* input for description */}
                <div className="task-input">
                    <label htmlFor="task-description">Description</label>
                    <textarea name='task_description' id='task-description' placeholder='Enter a short description' className='task-description' rows={5} onChange={handleChange} value={task.task_description || ""}></textarea>
                </div>

                {/*input for icon  */}
                <div className="task-input">
                    <label htmlFor="task-icon">Icon</label>
                    <div className="task-icon-buttons">
                        <label htmlFor="cloud" className='task-input-icon-box'>
                            <input type="radio" value={taskIcons[0]} id='cloud' name='task_icon' onClick={handleChange}/>
                            <img src={taskIcons[0]} alt=""  className={`task-input-icon ${task.task_icon===taskIcons[0]?"task-data-icon":"task-data-icon-remove"}`}/>  
                        </label>
                        
                        <label htmlFor="love_letter" className='task-input-icon-box'>
                            <input type="radio" value={taskIcons[1]} id='love_letter' name='task_icon' onClick={handleChange}/>
                            <img src={taskIcons[1]} alt=""  className={`task-input-icon ${task.task_icon===taskIcons[1]?"task-data-icon":"task-data-icon-remove"}`}/>  
                        </label>

                        <label htmlFor="polar_bear" className='task-input-icon-box'>
                            <input type="radio" value={taskIcons[2]} id='polar_bear' name='task_icon' onClick={handleChange}/>
                            <img src={taskIcons[2]} alt=""  className={`task-input-icon ${task.task_icon===taskIcons[2]?"task-data-icon":"task-data-icon-remove"}`}/>  
                        </label>

                        <label htmlFor="blossom" className='task-input-icon-box'>
                            <input type="radio" value={taskIcons[3]} id='blossom' name='task_icon' onClick={handleChange} />
                            <img src={taskIcons[3]} alt=""  className={`task-input-icon ${task.task_icon===taskIcons[3]?"task-data-icon":"task-data-icon-remove"}`}/>  
                        </label>

                        <label htmlFor="rocket" className='task-input-icon-box'>
                            <input type="radio" value={taskIcons[4]} id='rocket' name='task_icon' onClick={handleChange}/>
                            <img src={taskIcons[4]} alt=""  className={`task-input-icon ${task.task_icon===taskIcons[4]?"task-data-icon":"task-data-icon-remove"}`}/>  
                        </label>

                        <label htmlFor="nazar_amulet" className='task-input-icon-box'>
                            <input type="radio" value={taskIcons[5]} id='nazar_amulet' name='task_icon' onClick={handleChange} />
                            <img src={taskIcons[5]} alt=""  className={`task-input-icon ${task.task_icon===taskIcons[5]?"task-data-icon":"task-data-icon-remove"}`}/>  
                        </label>
                    </div>
                </div>

                <div className="task-input">
                    <label htmlFor="">Status</label>
                    <div className="status-box">
                        {/* in progress */}
                        <label className='task-status-box' htmlFor='task-status-inprogress'>
                            <div>
                                <img src={progress} alt="" className='input-status input-in-progress-icon'/>
                                <p className='input-status-text'>In Progress</p>
                            </div>
                            <input type="radio" name="task_status" id="task-status-inprogress" value="in progress" onClick={handleChange}/>
                            <img src={save} alt="" className={`task-status-check ${task.task_status=='in progress'?'task-status-data-check':''}`}/>
                        </label>

                        {/* completed */}
                        <label className='task-status-box' htmlFor='task-status-completed'>
                            <div>
                                <img src={completed} alt="" className='input-status input-completed-icon'/>
                                <p className='input-status-text'>Completed</p>
                            </div>
                            <input type="radio" name="task_status" id="task-status-completed" value="completed" onClick={handleChange} />
                            <img src={save} alt="" className={`task-status-check ${task.task_status=='completed'?'task-status-data-check':''}`}/>
                        </label>

                        {/* wont' do */}
                        <label className='task-status-box' htmlFor="task-status-wontdo">
                            <div>
                                <img src={wontdo} alt="" className='input-status input-wont-do-icon'/>
                                <p className='input-status-text'>Won't do</p>
                            </div>
                            <input type="radio" name="task_status" id="task-status-wontdo"  value="won't do" onClick={handleChange} />
                            <img src={save} alt="" className={`task-status-check ${task.task_status=="won't do"?'task-status-data-check':''}`}/>
                        </label>
                    </div>
                </div>
            </div>                
        </div>

        <div className="delete-save">
            <button className='delete-button' onClick={()=>deleteTask(taskId)}>
                Delete
                <img src={trash} alt="" />
            </button>
            {isAdd?<button className='save-button' onClick={()=>addTask()}>
                Save
                <img src={save} alt=""/>
            </button>:<button className='save-button' onClick={()=>updateTask(taskId)}>
                Save
                <img src={save} alt=""/>
            </button>}
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal

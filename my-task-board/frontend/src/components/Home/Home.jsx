import React, { useEffect, useState } from 'react'
import logo from '../../assets/Logo.svg'
import pen from '../../assets/Edit_duotone.svg'
import './Home.css'
import progress from '../../assets/Time_atack_duotone.svg'
import completed from '../../assets/Done_round_duotone.svg'
import wontdo from '../../assets/close_ring_duotone.svg'
import add from '../../assets/Add_round_duotone.svg'
import Modal from '../Modal/Modal'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [taskId, setTaskId] = useState(0)
    const [isAdd, setIsAdd] = useState(false)
    const [task, setTask]= useState({
        task_name: "",
        task_description: "",
        task_icon:"",
        task_status: ""
    })
    const [taskInfo, setTaskInfo]=useState([])

    useEffect(()=>{
        getTasks()
    },[])

    const getTasks=async()=>{
        try{
            const res = await axios.get('http://localhost:8801/task')            
            setTaskInfo(res.data) 
            
        }catch(err){
            console.error('An error occurred: ', err)

        }
    }

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setTask({...task, [name]: value})
    }

    const taskInfoFunc=(info)=>{
        setTask(info)
    }


    console.log(task)

  return (
    <div className='home-container'>

        <div className="task-board">
            {/* header */}
            <div className='task-board-header-cont'>
                <div className="task-board-header">
                    <img src={logo} alt="" className='logo'/>
                    <h1 className='title'>My Task Board</h1>
                    <img src={pen} alt="" className='pen'/>
                </div>
                <p className='description'>Tasks to keep organised</p>
            </div>

            <div className="task-list">

                {taskInfo.map((item,key)=>{
                    {/* task in progress */}
                    if(item.task_status==='in progress'){
                        return(
                            <button className="in-progress-box task-box" onClick={()=>{setIsOpen(item.id);  setTaskId(item.id); }} key={key}>
                                    <div className='icon-task'>
                                        <div className="task-icon">
                                        <img src={item.task_icon} alt=""  />  
                                        </div>
                                        <div className='task-title-description'>
                                            <p className='task-text'>{item.task_name}</p>
                                            <p className=''>{item.task_description}</p>
                                        </div>
                                    </div>
                                    <img src={progress} alt="" className='in-progress-icon task-type-icon'/>
                            </button>
                        )
                    }else if(item.task_status==='completed'){
                        {/* task completed */}
                        return(
                            <button className="completed-box task-box" onClick={()=>{setIsOpen(true);  setTaskId(item.id)}} key={key}>
                                    <div className='icon-task'>
                                        <div className="task-icon">
                                        <img src={item.task_icon} alt=""  />  
                                        </div>
                                        <div className='task-title-description'>
                                            <p className='task-text'>{item.task_name}</p>
                                            <p className=''>{item.task_description}</p>
                                        </div>
                                    </div>
                                    <img src={completed} alt="" className='completed-icon task-type-icon'/>
                            </button>
                        )
                    }else if(item.task_status==="won't do"){
                        {/* task won't do */}
                        return(
                            <button className="wont-do-box task-box" onClick={()=>{setIsOpen(true);  setTaskId(item.id)}} key={key}>
                            <div className='icon-task'>
                                <div className="task-icon">
                                <img src={item.task_icon} alt=""  />  
                                </div>
                                <div className='task-title-description'>
                                    <p className='task-text'>{item.task_name}</p>
                                    <p className=''>{item.task_description}</p>
                                </div>
                            </div>
                            <img src={wontdo} alt="" className='wont-do-icon task-type-icon'/>
                        </button>
                        )
                    }else if(item.task_status===null){
                        {/* task to do */}
                        return(
                            <button className="to-do-box task-box" onClick={()=>{setIsOpen(true);  setTaskId(item.id)}} key={key}>
                            <div className='icon-task'>
                                <div className="task-icon">
                                    <img src={item.task_icon} alt=""  />  
                                </div>
                                <div className='task-title-description'>
                                    <p className='task-text'>{item.task_name}</p>
                                    <p className=''>{item.task_description}</p>
                                </div>
                            </div>
                        </button>
                        )
                    }
                })}
                
                {/* add new taxk */}
                <button className="add-task-box task-box" onClick={()=>{setIsOpen(true); setTask({}); setIsAdd(true)}}>
                    <div className='icon-task'>
                        <img src={add} alt=""  className='task-type-icon add-icon-button'/>                         
                        <p className='add-text'>Add new task</p>  
                    </div>
                </button>


            </div>

            
            
        </div>
        <Modal open={isOpen} close={()=>setIsOpen(false)} handleChange={handleChange} taskId={taskId} setTaskId={()=>setTaskId(0)} setTask={taskInfoFunc} task={task} isAdd={isAdd} setIsAdd={()=>setIsAdd(false)}/>
      
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import './All.css'
import Navbar from '../../components/Navbar/Navbar'
import AddTask from '../../components/AddTask/AddTask'
import ActiveCheckbox from '../../components/ActiveCheckbox/ActiveCheckbox'
import AllCheckbox from '../../components/AllCheckbox/AllCheckbox'
import CompletedCheckbox from '../../components/CompletedCheckbox/CompletedCheckbox'

const All = () => {
    //This is called a lazy initializer. The function will only be executed once when the component is first rendered, which is useful for expensive computations or retrieving data from storage like in this case.
    //localStorage.getItem('tasks'): Retrieves an item from the browser's localStorage with the key 'tasks'.
    //JSON.parse(...): Converts the retrieved string (which is stored as JSON in localStorage) back into a JavaScript object or array.
    //return data ? data : []: If data exists (i.e., it's not null), it is returned and set as the initial value for todo. Otherwise, an empty array [] is returned.
    const [todo,setTodo]= useState(()=>{
        const data = JSON.parse(localStorage.getItem('tasks'))
        return data?data:[]
    })
    const [openAll, setOpenAll] = useState(true)
    const [openActive, setOpenActive] = useState(false)
    const [openCompleted, setOpenCompleted] = useState(false)
    const [error,setError] = useState('')
    
    const [task,setTask]=useState({
        task:'',
        status:'active'
    })

    // everytime na nagttype si user, ung input mapupunta sa task usestate
    const handleChange=(e)=>{
        const {name,value} = e.target
        setTask({...task,[name]:value})        
    }

    const formValidation=()=>{
        let err = ''
        if(task.task==''){
            err='Please add a task first'
        }
        setError(err)
        if(err==''){
            return true
        }        
    }

    //when submit button is clicked, mapupunta yung string sa todo
    const handleSubmit=()=>{
        if(formValidation()){
            setTodo([...todo,task])
        }        
    }

    const handleTodo=(e,key)=>{
        const checked = e.target.checked
        if(checked){
            // The map method iterates over each element of the array and applies a function to each element. It then collects the results of this function into a new array, which is used as the updated state when passed to setTodo.
            setTodo(prev=>prev.map((item,index)=>
           index===key ? {...item,status:'completed'} : item
            ))
        }else{
            setTodo(prev=>prev.map((item,index)=>
                index===key ? {...item,status:'active'} : item
                 ))
        }        
    }

    const deleteTask=(n)=>{
        //create a new array tapos itoung ippush natin sa todo
        const newTodo = [...todo]
        newTodo.splice(n,1)
        setTodo(newTodo)
    }


    const deleteAll=()=>{
        const completeDeleted=[]
        todo.map(item=>{
            if(item.status!='completed'){
                completeDeleted.push(item)
            }
        })
        setTodo(completeDeleted)
    }

    // whenever todo state changes, data is stored in local storage
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(todo))
    },[todo])

    console.log(JSON.parse(localStorage.getItem('tasks')))
    console.log(todo)


  return (
    <div className='all-container'>
        <h1>#todo</h1>
        <Navbar 
        openAll={()=>{
            setOpenAll(true)
            setOpenActive(false)
            setOpenCompleted(false)
        }}
        openActive={()=>{
            setOpenAll(false)
            setOpenActive(true)
            setOpenCompleted(false)
        }}
        openCompleted={()=>{
            setOpenAll(false)
            setOpenActive(false)
            setOpenCompleted(true)
        }}
        />

        {openActive||openAll?
        <AddTask handleChange={handleChange} handleSubmit={handleSubmit} error={error}/>:''}
        
        {todo.map((item,key)=>{
            if(openActive&&item.status=='active'){
                return(
                    <ActiveCheckbox task={item.task} handleTodo={(e)=>handleTodo(e,key)}/>
                )
            }else if(openCompleted&&item.status=='completed'){
                return(
                    <CompletedCheckbox task={item.task} handleTodo={(e)=>handleTodo(e,key)} checked={item.status=='completed'?true:false} deleteTask={()=>deleteTask(key)}/>
                )
            }else if(openAll){
                return(
                    <AllCheckbox task={item.task} handleTodo={(e)=>handleTodo(e,key)} checked={item.status=='completed'?true:false}/>
                )
            }
            
        })}
        
        {openCompleted?<div className='button-sec'><button className='delete-all' onClick={deleteAll}>
            <i class="fa-solid fa-trash"></i>
            <span>delete all</span>
        </button></div>:''}
      
    </div>
  )
}

export default All

import React, { useEffect, useState } from 'react'
import './Form.css'
import Register from '../Register/Register'
import Topics from '../Topics/Topics'
import Confirm from '../Confirm/Confirm'

const Form = () => {
    const [page, setPage] = useState(0)
    const headerTitle = ["Register", "Which topics are you interested in?", "Summary"]
    const buttonLabel = ["Continue", "Confirm"]
    const [selectedTopics, setSelectedTopics] = useState([])
    const [errors, setErrors] =useState({})
    const [user, setUser] = useState({
        name:'',
        email:'',
        topics: []
    })

    //this useEffect is executed everytime the page state changes
    useEffect(()=>{
        if(page===0){
            setUser({
                name:'',
                email:'',
                topics:[]
            })
        }
    },[page])


   

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({...user, [name]:value})
    }

    //everytime na nacclick yung checkbox, ito yung naeexecute
    const handleTopic=(e)=>{
        //this is the same as e.target.value and e.target.checked
        //if nakacheck yung checkbox, yung value ng checked ay true
        const {value, checked} = e.target;
        
        //...so if checked is true, magccreate ng panibagong array na kasama na yung bagong value [...selectedTopics,value]
        if(checked){
            //setSelectedTopics([...selectedTopics,value])

            //currTopics Represents the previous state of the user object.

            //copy the previous state ng user then add topics
            setUser({...user,topics: [...user.topics, value]})
        }
        else{
            //else, if false ung checked, ififilter mo yung selectedTopics. yung filter, ang ginagawa niya ay nagrereturn siya ng bagong array.
            //(topic)=>topic!=value) - bali ito, ung topic is equivalent sa mga bawat element sa selectedTopics. bawat element ay ieevaluate niya. if yung topic ay hindi equal sa topic na clinick mo, madadagdag siya sa array na irereturn ng filter
            //setSelectedTopics(selectedTopics.filter((topic)=>topic!=value))

            setUser({...user, topics:user.topics.filter((topic)=>topic!=value)})
        }
    }


    const renderPage = ()=>{
        if(page===0){
            return <Register user={user} handleChange={handleChange} errors={errors}/>
        }else if(page===1){
            return <Topics handleTopic={handleTopic} errors={errors}/>
        }else{
            return <Confirm user={user}/>
        }
    }

    const formValidation=()=>{
        let err = {}
        if(page==0){
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if(user.name==''){
                err.name='Please enter your name'
                console.log('enter name')
            }
            if(!regex.test(user.email)||user.email==''){
                err.email='Please enter a valid email'
                console.log('enter name')
            }else{
                setPage((currpage)=>currpage+1)
            }
        }else if(page==1){
            if(user.topics.length==0){
                err.topics='Please choose a topic'
            }else{
                setPage((currpage)=>currpage+1)
            }
        }else if(page==2){
            alert('Success')
            setPage(0)
        }

        setErrors(err)
    }


    //console.log(selectedTopics)
    console.log(user)
  return (
    <div className='container'>
        <div className="blur1"></div>
        <div className="blur2"></div>
        <div className="form-container">
            {/* form box */}
            <div className="form-box">
                <div className="form-header">{headerTitle[page]}</div>
                <div className="form-body">
                {renderPage()}
                </div>
                <div className="form-button-box">
                    {/* <button disabled={page==headerTitle.length-1} className='form-button' onClick={()=>setPage((currpage)=>currpage+1)}>{page<=headerTitle.length-2?buttonLabel[0]:buttonLabel[1]}</button> */}
                    <button disabled={page==headerTitle.length} className='form-button' onClick={formValidation}>{page<=headerTitle.length-2?buttonLabel[0]:buttonLabel[1]}</button>
                </div>
            </div>
            {/* steps */}
            <div className="steps">
                <p>Step <span>{page+1}</span> of 3</p>
                <div className="step-indicator">
                    {/* 3 circles */}
                    <button className={page==0?'step-shadow':'step-selected'}></button>
                    <button className={page>=1?page==2?'step-selected':'step-shadow':''}></button>
                    <button className={page==2?'step-shadow':''}></button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Form

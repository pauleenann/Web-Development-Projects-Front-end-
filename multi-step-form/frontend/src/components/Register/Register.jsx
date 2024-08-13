import React from 'react'
import './Register.css'
const Register = ({user, handleChange,errors}) => {
  return (
    <div className='register-container'>
        <div className="register-input">
            <label htmlFor="">Name</label>
            <input type="text" id='name' placeholder='enter your name' name='name' value={user.name} onChange={handleChange}/>
            <span className='error'>{errors.name}</span>
        </div>
        <div className='register-input'>
            <label htmlFor="">Email</label>
            <input type="text" id='name' placeholder='example@gmail.com' name='email' onChange={handleChange}/>
            <span className='error'>{errors.email}</span>
        </div>
        
        
    </div>
  )
}

export default Register

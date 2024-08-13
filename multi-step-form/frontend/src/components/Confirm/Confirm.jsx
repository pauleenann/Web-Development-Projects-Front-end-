import React from 'react'
import './Confirm.css'

const Confirm = ({user}) => {
  return (
    <div className='confirm-container'>
        <div className='confirm-name-email'>
            <p className='confirm-label'>Name: <span className='confirm-info confirm-info-name'>{user.name}</span></p>
            <p className='confirm-label'>Email: <span className='confirm-info'>{user.email}</span></p>
        </div>
        <div className='confirm-topic'>
            <p className='confirm-label'>Topics</p>
            <ul>
                {user.topics.map((topic)=>(
                    <li>{topic}</li>
                ))}
            </ul>
        </div>
      
    </div>
  )
}

export default Confirm

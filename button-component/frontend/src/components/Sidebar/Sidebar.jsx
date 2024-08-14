import React from 'react'
import './Sidebar.css'
import logo from '../../assets/devchallenges.png'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='logo'>
        <p className="logo"><span>Dev</span>challenges.io</p>
      </div>
      <div className="menu">
        <ul>
            <li>Colors</li>
            <li>Typography</li>
            <li>Spaces</li>
            <li>Buttons</li>
            <li>Inputs</li>
            <li>Grid</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

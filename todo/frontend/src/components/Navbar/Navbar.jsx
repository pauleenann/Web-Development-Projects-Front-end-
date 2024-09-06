import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = ({openAll, openActive,openCompleted}) => {
  return (
    <div className='navbar-container'>
        <ul class="nav nav-underline">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" onClick={openAll}>All</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" onClick={openActive}>Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" onClick={openCompleted}>Completed</a>
            </li>
        </ul>
      
    </div>
  )
}

export default Navbar

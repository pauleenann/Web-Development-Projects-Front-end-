import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import ButtonPage from '../ButtonPage/ButtonPage'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="buttons">
        <ButtonPage/>
      </div>
    </div>
  )
}

export default Home

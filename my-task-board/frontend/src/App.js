import React from 'react'
import Home from './components/Home/Home'
import Modal from './components/Modal/Modal'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App

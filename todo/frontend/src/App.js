import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import All from './pages/All/All';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<All/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

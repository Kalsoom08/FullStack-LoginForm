import React from 'react'
import { RegisterUser} from './Components/RegisterUser';
import { LoginUser } from './Components/loginUser';
import {Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
   
    </div>
  )
}

export default App
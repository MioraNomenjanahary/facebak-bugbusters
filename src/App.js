import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './LoginPage/Login';
import Signup from './SignupPage/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element= {<Login /> } />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './LoginPage/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element= {<Login /> } />
          <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>   
  );
}
export default App;

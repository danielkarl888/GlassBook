import LoginPage from './LoginPage';
import React from 'react';
import RegisterPage from './RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function FormStartScreen () {
        return (
          <> 
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage/>}></Route>
              <Route path="/regi" element={<RegisterPage/>}></Route>
            </Routes>
          </BrowserRouter>
          </>
        );
}
export default FormStartScreen;
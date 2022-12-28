import LoginPage from './LoginPage';
import React from 'react';
import RegisterPage from './RegisterPage';
import MainPage from './MainPage';
import BookDetails from './BookDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function FormStartScreen() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/regi" element={<RegisterPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/book_details" element={<BookDetails />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default FormStartScreen;
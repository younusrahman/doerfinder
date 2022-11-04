import SideNav from 'component/Navbar/SideNav'
import Home from 'pages/homePage/Home'
import Login from 'form/RegisterForm'
import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import RegisterForm from 'form/RegisterForm'
import CustomFooter from 'component/Footer/CustomFooter'


function App() {
  return (
    <>
    <SideNav/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<RegisterForm />} />
      </Routes>
      <CustomFooter/>
    </>
  )
}


export default App

import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'

const Main = () => {
  console.log('sakdjhj');
  return (
    <div>
      <Navbar/>
      <div className='' style={{marginTop: '70px'}}></div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Main;
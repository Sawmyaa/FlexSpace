import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';



const vendor = () => {
  return (
    <div>
      <Navbar/>
       <Outlet/> {/*this is for child router */}
       <Footer/>
    </div>
  )
}

export default vendor;

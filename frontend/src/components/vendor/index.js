import React from 'react'
import { Outlet } from 'react-router-dom';


import Navbar from '../main/Navbar';
import Footer from '../main/Footer';




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

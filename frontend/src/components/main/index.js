import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';



const Main = () => {
  return (
    <div>
       <Outlet/> {/*this is for child router */}
    </div>
  )
}

export default Main;

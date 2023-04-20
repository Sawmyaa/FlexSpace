import React from 'react'
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
       <Navbar/>
       <Outlet/> {/*this is for child router */}
    </div>
  )
}

export default Main;

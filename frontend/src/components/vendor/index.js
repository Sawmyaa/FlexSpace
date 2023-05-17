import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'


const Vendor = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Vendor;
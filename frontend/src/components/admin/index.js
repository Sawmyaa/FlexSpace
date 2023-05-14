import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../admin/NavBar'

const Admin = () => {
    return (
        <div>
            
            <NavBar />
            <Outlet />

        </div>
    )
}

export default Admin
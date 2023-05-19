import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useVendorContext } from '../../context/VendorProvider';

const NavBar = () => {
    const { loggedIn, setLoggedIn, logout } = useVendorContext();
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("vendor"))
    );


    // const showLoggedIn = () => {
    //     if (!loggedIn) {
    //         return (
    //             <>
    //                 <li className="nav-item">
    //                     <NavLink className="nav-link text-white" aria-current="page" to="/main/login">
    //                         Login
    //                     </NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                     <NavLink className="nav-link text-white" aria-current="page" to="/main/signup">
    //                         SignUp
    //                     </NavLink>
    //                 </li>
    //             </>
    //         );
    //     }
    // }

    const showLogout = () => {
        if (loggedIn) {
            return (
                <ul className="navbar-nav">
                    {/* // <li className="nav-item"> */}
                    {/* <button className="btn btn-danger ms-3" aria-current="page" onClick={logout}>
                        Logout
                    </button> */}
                    <button type="button" className="btn btn-dark me-3 mb-2" onClick={logout} style={{borderRadius:"20px", backgroundColor:"blue", fontWeight:"600"}}>
                        LogOut
                    </button>
                    {/* <NavLink className="nav-link text-white" onClick={logout} type='button'>
                        <b>LOGOUT</b>
                    </NavLink> */}
                    {/* // </li> */}
                </ul>
            );
        }
    }


    return (
        <div >
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{ height: "10%" }}>
                <div className="container-fluid">
                    <li className="navbar-brand fw-bold" href="#" style={{ color: "Blue" }}>
                        FlexSpace
                    </li>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >

                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav  fs-5">
                            {/* <NavLink className="nav-link text-white" aria-current="page" to="/main/home">
                                <b>HOME</b>
                            </NavLink> */}
                            <NavLink className="nav-link text-white" aria-current="page" to="/vendor/add_space">
                                <b>ADD SPACE</b>
                            </NavLink>
                            <NavLink className="nav-link text-white" to="/vendor/manage_space">
                                <b>MANAGE SPACE</b>
                            </NavLink>
                            {/* <NavLink className="nav-link text-white" to="/user/profile">
                                <b>PROFILE</b>
                            </NavLink> */}
                            {/* <NavLink className="nav-link text-white" onClick={logout} type='button'>
                                <b>LOGOUT</b>
                            </NavLink> */}
                            {/* {showLoggedIn()} */}
                           
                            {showLogout() }
                          
                            

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar

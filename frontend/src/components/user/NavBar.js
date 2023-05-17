import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from "../../context/UserProvider";

const NavBar = () => {
    const { loggedIn, setLoggedIn, logout } = useUserContext();
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user"))
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
                    <button type="button" className="btn btn-dark me-3 mb-2" onClick={logout}>
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
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Office_building_icon.png"
                        height="35"
                        alt="MDB Logo"
                        loading="lazy"
                    />
                    <h4 className='text-white'>
                        OFFICE SPACE
                    </h4>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav  fs-5">
                            {/* <NavLink className="nav-link text-white" aria-current="page" to="/main/home">
                                <b>HOME</b>
                            </NavLink> */}
                            {/* <NavLink className="nav-link text-white" aria-current="page" to="/user/add_space">
                                <b>ADD SPACE</b>
                            </NavLink> */}
                            {/* <NavLink className="nav-link text-white" to="/user/manage_space">
                                <b>MANAGE SPACE</b>
                            </NavLink> */}
                            {/* <NavLink className="nav-link text-white" to="/user/profile">
                                <b>PROFILE</b>
                            </NavLink> */}
                            {/* <NavLink className="nav-link text-white" onClick={logout} type='button'>
                                <b>LOGOUT</b>
                            </NavLink> */}
                            {/* {showLoggedIn()} */}
                            {showLogout()}

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
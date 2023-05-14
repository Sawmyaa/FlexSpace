import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAdminContext } from '../../context/AdminProvider';


const NavBar = () => {

    const { loggedIn, setLoggedIn, logout } = useAdminContext();

    const showLoggedIn = () => {
        if (!loggedIn) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" aria-current="page" to="/main/alogin">
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" aria-current="page" to="/main/asignup">
                            SignUp
                        </NavLink>
                    </li>
                </>
            );
        }
    }

    const showLogout = () => {
        if (loggedIn) {
            return (
                <li className="nav-item">
                    <button className="btn btn-danger ms-3" aria-current="page" onClick={logout}>
                        Logout
                    </button>
                </li>
            );
        }
    }




    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'purple'}}>


                {/* Container wrapper */}
                <div className="container text-white">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Office_building_icon.png"
                        height="35"
                        alt="MDB Logo"
                        loading="lazy"
                    />

                    <h4>OFFICE SPACE</h4>
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}



                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarCenteredExample"
                    >
                        {/* Left links */}
                        <ul className="navbar-nav mb-2 mb-lg-0 fs-5">
                            <li className="nav-item ">
                                <NavLink className="nav-link text-white" aria-current="page" to="/main/home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" aria-current="page" to="/main/browsespace">
                                    Browse Space
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link text-white" to="login">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="signup">
                                    SignUp
                                </NavLink>
                            </li> */}

                            {showLoggedIn()}
                            {showLogout()}


                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>


        </div>
    )
}

export default NavBar
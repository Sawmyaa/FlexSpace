import React from 'react'
import { SiGotomeeting } from 'react-icons/si';
import './navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    <div >
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{ height: "10%" }}>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/main/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/Login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/browseSpace">
                  Browse Office Space
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/vendor/CompareSpaces">
                  Compare Spaces
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <NavLink className="spacebtn btn btn-primary btn-rounded" to="/vendor/add_space">
                + ADD YOUR SPACE
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>


  )
}

export default Navbar;

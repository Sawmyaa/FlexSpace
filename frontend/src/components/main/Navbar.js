import React from 'react'
import { SiGotomeeting } from 'react-icons/si';
import './navbar.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    
    <div >
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{height:"10%"}}>
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#" style={{color:"Blue"}}>
      {/* <SiGotomeeting className='icon'/> */}
      FlexSpace
    </a>
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
          <NavLink className="nav-link" to="/main/Signup">
           Signup
          </NavLink>
        </li>
   
        <li className="nav-item">
          <NavLink className="nav-link" to="/main/Login">
            Login
          </NavLink>
        </li>
       
      </ul>
      <button type="submit" className="spacebtn btn-primary btn-block">
      <NavLink className="nav-link" to="/main/AddSpace">
            + ADD YOUR SPACE
          </NavLink>
          </button>
    </div>
  </div>
</nav>
</div>
  

  )
}

export default Navbar;

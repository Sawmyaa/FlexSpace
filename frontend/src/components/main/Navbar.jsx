import React from 'react'
import { SiGotomeeting } from 'react-icons/si';
import './navbar.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    
    <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
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
      <button type="submit" className="spacebtn btn-primary btn-block mb-1">
            + ADD YOUR SPACE
          </button>
    </div>
  </div>
</nav>
</div>
  
  //  <section className="navBarSection">
  //   <header className="header flex">
  //     <div className="logoDiv">
  //       <a href="#" className='logo flex'>
  //         <h1><SiGotomeeting className='icon'/>FlexSpace.</h1>
  //       </a>
  //     </div>

  //     <div className="navBar">
  //       <ul className="navLists flex">
  //         {/* <li className="navItem">
  //           <a href="#" className='navLink'>Home</a>
  //         </li>
  //         <li className="navItem">
  //           <a href="#" className='navLink'>Services</a>
  //         </li>
  //         <li className="navItem">
  //           <a href="#" className='navLink'>About Us</a>
  //         </li>
  //         <li className="navItem">
  //           <a href="#" className='navLink'>Contact Us</a>
  //         </li> */}

  //         <button className="btn">
  //           <a href="#">+ ADD YOUR SPACE</a>
  //         </button>
  //       </ul>
  //     </div>
  //   </header>
  //  </section>
  //  </>
  )
}

export default Navbar

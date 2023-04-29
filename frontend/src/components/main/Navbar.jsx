import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"Red"}}>
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
    </div>
  </div>
</nav>
</div>

  

  )
}

export default Navbar
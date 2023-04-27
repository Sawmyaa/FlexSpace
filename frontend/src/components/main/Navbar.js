import React from 'react'
import { SiGotomeeting } from 'react-icons/si';
import './navbar.css'

const Navbar = () => {
  return (
    
    <>
    {/* Just an image */}
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height={20}
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
      </div>
    </nav>
  </>
  
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

export default Navbar;

import React from 'react'
import video from '../../Assets/video2.mp4'
import './home.css'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'

const Home = () => {
  return (
    <div>
     {/* <video src={video} autoPlay loop muted /> */}

     <div className="homeContent container">
      <div className="textDiv">
        <span className="smallText">
          Our Packages
        </span>
        <h1 className="homeTitle">
          Your space search ends here.
        </h1>
      </div>
     </div>

     <div className="cardDiv grid">
      <div className="destinationInput">
        <label htmlFor="city">Search your destination</label>
        <div className="input flex">
          <input type="text" placeholder='Enter name here...' />
          <GrLocation className="icon"/>
        </div>
     </div>
      <div className="dateInput">
        <label htmlFor="city">Select your date:</label>
        <div className="input flex">
          <input type="date"/>
        </div>
     </div>
      <div className="priceInput">
        <label htmlFor="city">Search your destination</label>
        <div className="label_total flex">
          <label htmlFor="price">Max price:</label>
          <h3 className="total">$5000</h3>
          </div>
          <div className="input flex">
            <input type="range" max='5000' min='1000'/>
          </div>
        </div>

        <div className="searchOptions flex">
        <HiFilter className="icon"/>
        <button>SEARCH</button>
        </div>
        </div>
     </div>
  )
}

export default Home


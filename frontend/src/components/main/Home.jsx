import React from 'react'
import video from '../../Assets/video4.mp4'
import './home.css'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'

const Home = () => {
  return (
    <div>
     <video src={video} autoPlay loop muted />

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
        <label htmlFor="city">Check-in:</label>
        <div className="input flex">
          <input type="date"/>
        </div>
     </div>
      <div className="priceInput">
        <div className="label_total flex">
          <label htmlFor="price">Max price:</label>
          <h3 className="total">$5000</h3>
          </div>
          <div className="input flex">
            <input type="range" max='5000' min='1000'/>
          </div>
        </div>

        <div className="searchOptions flex">
        {/* <HiFilter className="icon"/> */}
        <button>SEARCH</button>
        </div>
        </div>

        {/* Dividers */}
      <section className="text-center">
  <div className="row">
    <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
      <i className="fas fa-cubes fa-3x text-primary mb-4" />
      <h5 className="text-primary fw-bold mb-3">5000+</h5>
      <h6 className="fw-normal mb-0">Spaces</h6>
      <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0" />
    </div>
    <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
      <i className="fas fa-layer-group fa-3x text-primary mb-4" />
      <h5 className="text-primary fw-bold mb-3">490+</h5>
      <h6 className="fw-normal mb-0">Users</h6>
      <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0" />
    </div>
    <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
      <i className="fas fa-image fa-3x text-primary mb-4" />
      <h5 className="text-primary fw-bold mb-3">100+</h5>
      <h6 className="fw-normal mb-0">Locations</h6>
      <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0" />
    </div>
    <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
      <i className="fas fa-plug fa-3x text-primary mb-4" />
      <h5 className="text-primary fw-bold mb-3">28</h5>
      <h6 className="fw-normal mb-0">Plugins</h6>
    </div>
  </div>
</section>

        {/* Service Section */}
          <h1 className='srv'>SERVICES</h1>
        <div className="row row-cols-1 row-cols-md-4 g-3">
  <div className="col">
    <div className="card h-100">
      <img
        src="https://t4.ftcdn.net/jpg/02/26/40/71/240_F_226407162_9boBRaWOySHw1JeW3Ij0nPrfTtZR8eX7.jpg"
        className="card-img-top"
        alt="Skyscrapers"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://t3.ftcdn.net/jpg/05/68/70/70/240_F_568707076_CQ194QYBd1lYfdCdcBkAMai0MTENv2wX.jpg"
        className="card-img-top"
        alt="Skyscrapers"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://t4.ftcdn.net/jpg/04/89/50/53/240_F_489505362_XYGy0WeSIMOHBsYYyiRoWO2Hc9Ed1Dxk.jpg"
        className="card-img-top"
        alt="Los Angeles Skyscrapers"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
      {/* <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div> */}
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img
        src="https://t4.ftcdn.net/jpg/01/63/79/33/240_F_163793332_LSLPHVVYPXkfCfcwunGzwyj43UHdvMr6.jpg"
        className="card-img-top"
        alt="Palm Springs Road"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </p>
      </div>
      
      {/* <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div> */}
    </div>
  </div>
  
</div>

      {/* Gallery */}

  {/* Gallery */}
  <div className="row">
  <h1 className='cwr'>TOP COWORKING CITIES</h1>
    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
        src="https://t3.ftcdn.net/jpg/02/67/71/90/240_F_267719012_Kfn3ce4iMX5F69Hgk2zR8gzrOnyBOhjZ.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />
      <img
        src="https://t3.ftcdn.net/jpg/04/01/43/06/240_F_401430617_QU5FmwCbN3oiysrAnVN2yXreAkbPOESe.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
      />
    </div>
    <div className="col-lg-4 mb-4 mb-lg-0">
      <img
        src="https://i.pinimg.com/564x/e0/6a/e2/e06ae29ad41099ced40dc13352370cae.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
      />
      <img
        src="https://t3.ftcdn.net/jpg/00/50/44/02/240_F_50440279_NjJDH4VfoKnV2jsgXAAonTgWtq5QXKdl.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />
    </div>
    <div className="col-lg-4 mb-4 mb-lg-0">
      <img
        src="https://t3.ftcdn.net/jpg/04/76/78/86/240_F_476788612_cgmTI5EvXqrIR2eyj1yWmTHHUDz17v91.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Waves at Sea"
      />
      <img
        src="https://t4.ftcdn.net/jpg/05/40/30/71/240_F_540307170_qg8R8Seug9NYJzL7FpbBuW5St0lIyAvv.jpg"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
      />
    </div>
  </div>
  {/* Gallery */}

{/* <>
<video className="vid" src={video} autoPlay loop muted />
  <h2 className='name'>FLEXSPACE</h2>
</> */}


     </div>

     
  )
}

export default Home


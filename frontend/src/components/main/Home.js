import React, { useState } from 'react'
import video from '../../Assets/video4.mp4'
import './home.css'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { NavLink, useNavigate } from 'react-router-dom';
import img from '../../Assets/img.jpg'

const Home = () => {
        {/* Data */}
        // const Data = [
        //   {
        //     id:1,
        //     imgSrc: img,
        //     destTitle: 'OfficeDesk',
        //     location: 'Mumbai',
        //     price: 'Rs.5000',
        //     rating: 4.5,
        //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        //   },
        //   {
        //     id:2,
        //     imgSrc: img1,
        //     destTitle: 'ConferenceRoom',
        //     location: 'Delhi',
        //     price:' Rs.2000',
        //     rating: 4.5,
        //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        //   },
        //   {
        //     id:3,
        //     imgSrc: img2,
        //     destTitle: 'HotDesk',
        //     location: 'Noida',
        //     price: 'Rs.3000',
        //     rating: 4.5,
        //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        //   },

        //   {
        //     id:4,
        //     imgSrc: img3,
        //     destTitle: 'URBAN DESK',
        //     location: 'Bangalore',
        //     price: 'Rs.4000',
        //     rating: 4.5,
        //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        //   },
        // ]


  const [location, setLocation] = useState('');
  const [price, setPrice] = useState(5000);

  const navigate = useNavigate();

  const navigateToBrowse = () => {
    sessionStorage.setItem('location', location);
    sessionStorage.setItem('price', price);
    navigate('/main/browseSpace/'+location+'/'+price);
  }

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
        {/* <button type="button" className="homebtn btn btn-light btn-rounded" >
        <NavLink className="nav-link" to="/main/login">
  Book Now
  </NavLink>
</button>
      </div> */}



        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here...' onChange={ e => setLocation(e.target.value) } />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Check-in:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h6 className="total">Rs.5000</h6>
            </div>
            <div className="input flex">
              <input type="range" max='5000' min='1000' onChange={ e => setPrice(parseInt(e.target.value))} />
            </div>
            
          </div>

          <div className="searchOptions flex">
            {/* <HiFilter className="icon"/> */}
            <button className='searchbtn' onClick={navigateToBrowse}>SEARCH</button>
          </div>
        </div>

        {/* Dividers */}
        <section className="text-center">
          <div className="facilities">
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
          </div>
        </section>

        {/* Most searched places */}
        {/* <section className='main container section'>
          <div className="sectitle">
            <h3 className='title'>
              Most searched spaces
            </h3>
          </div>

          <div className='secContent grid'>
           {
              Data.map((id, imgSrc, deskTitle, location, price, rate, description) => {
                return(
                  <div key={id} className='singleDestination'>
                    <div className="imgDiv">
                      <img src={imgSrc} alt={destTitle} />
                      </div>
                      <div className="cardInfo">
                        <h4 className="cardTitle">{destTitle}</h4>
                    </div>
                    </div>
                )
            })
           }
          </div>
        </section> */}

  
        {/* Gallery */}
        <>
          {/* Section: About me */}
          <section className="mb-10">
            <div className="container">
              <div className="row gx-0 align-items-center">
                {/* First column */}
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card rounded-7 me-lg-n5">
                    <div className="card-body p-lg-5 shadow-5">
                      <h2 className="fw-bold">
                        <span className="text-primary">FlexSpace</span>
                      </h2>
                      <p className="fw-bold">
                        <em>“Variety of prices and locations at one place.”</em>
                      </p>
                      <p className="text-muted mb-4">
                        
FlexSpace is a leading provider of flexible office space solutions. They offer a range of facilities and services to cater to the needs of businesses and professionals seeking flexible workspace options. With a strong presence in the commercial real estate market, FlexSpace provides versatile workspace solutions that can be customized to fit individual requirements.
                      </p>
                      <p className="text-muted">
                      FlexSpace centers are located in prime locations, including major cities and strategic business districts. This ensures easy access to transportation hubs, amenities, and a vibrant business ecosystem. Their centers are equipped with modern amenities such as high-speed internet, comfortable furniture, state-of-the-art technology, and well-designed communal areas.

In addition to providing workspace solutions, FlexSpace offers a range of business support services. These include reception and concierge services, mail handling, phone answering, IT support, and access to professional meeting and conference facilities. These services are designed to enhance business operations and create a seamless work experience.

FlexSpace understands that business needs can change over time. Their flexible agreements allow businesses to scale their workspace up or down as required, ensuring cost optimization and adaptability. Furthermore, FlexSpace fosters a vibrant and collaborative community by hosting networking events, workshops, and social activities. This creates opportunities for professionals to connect, collaborate, and gain insights from like-minded individuals, fostering a supportive and inspiring work environment.
                      </p>
                    </div>
                  </div>
                </div>
                {/* First column */}
                {/* Second column */}
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <img
                    src="https://i.pinimg.com/564x/75/bb/7a/75bb7ad43a5ce65090276c92d976f863.jpg"
                    className="w-100 rounded-7 shadow-4"
                    alt=""
                  />
                </div>
                {/* Second column */}
              </div>
            </div>
          </section>
          {/* Section: About me */}
        </>


        {/* Service Section */}
        {/* <h1 className='srv'>SERVICES</h1> */}
        <div className="services">
        <h1 className='cwr'>FACILITIES PROVIDED</h1>
          <div className="row row-cols-1 row-cols-md-4 g-3">
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://t4.ftcdn.net/jpg/02/26/40/71/240_F_226407162_9boBRaWOySHw1JeW3Ij0nPrfTtZR8eX7.jpg"
                  className="card-img-top"
                  alt="Skyscrapers"
                />
                <div className="card-body">
                  <h5 className="card-title">Flexible Workspace Options</h5>
                  <p className="card-text">
                  FlexSpace provides a range of workspace options, including coworking spaces, private offices, virtual offices, and meeting rooms, catering to the diverse needs of businesses and professionals.
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
                  <h5 className="card-title">Modern Amenities</h5>
                  <p className="card-text">
                  FlexSpace centers are equipped with modern amenities, such as high-speed internet, comfortable furniture, state-of-the-art technology, and well-designed communal areas, ensuring a productive and comfortable work environment.
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
                  <h5 className="card-title">Business Support Services</h5>
                  <p className="card-text">
                  FlexSpace offers a range of business support services, including reception and concierge services, mail handling, phone answering, IT support, and access to professional meeting and conference facilities, streamlining business operations and enhancing productivity.
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
                  <h5 className="card-title">Prime Locations</h5>
                  <p className="card-text">
                  FlexSpace centers are strategically located in prime locations, ensuring easy access to transportation, amenities, and a thriving business environment.
                  </p>
                </div>

                {/* <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div> */}
              </div>
            </div>
          </div>
        </div>


        {/* Gallery */}
        <div className="city">
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
        </div>
        {/* Gallery */}

        <>
  {/* Carousel wrapper */}
  <div
    id="carouselMultiItemExample"
    className="carousel slide carousel-dark text-center"
    data-mdb-ride="carousel"
  >
    {/* Controls */}
    <div className="d-flex justify-content-center mb-4">
      <button
        className="carousel-control-prev position-relative"
        type="button"
        data-mdb-target="#carouselMultiItemExample"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next position-relative"
        type="button"
        data-mdb-target="#carouselMultiItemExample"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* Inner */}
    <div className="carousel-inner py-4">
      {/* Single item */}
      <div className="carousel-item active">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://i.pinimg.com/564x/65/f8/97/65f897e47b9a8961d01f76492a20bae6.jpg"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">Anna Deynah</h5>
              <p>UX Designer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                The design of the website is so appealing and modern. It made me excited to explore different workspace options.
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://i.pinimg.com/564x/f0/78/08/f078081db4493d676638e74a6e50793b.jpg"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">John Doe</h5>
              <p>Enterpreneur</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                Flexspace clearly communicated all the important details, like pricing, amenities, and cancellation policies. No surprises!
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://i.pinimg.com/736x/41/4f/f4/414ff41c6cba7aa12e9d9055ca57eb09.jpg"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">Maria Kate</h5>
              <p>Marketing Manager</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                Contacting customer support was a breeze. The website had all the information I needed to get in touch.
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="far fa-star fa-sm" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">John Doe</h5>
              <p>UX Designer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">Alex Rey</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="far fa-star fa-sm" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">Anna Deynah</h5>
              <p>UX Designer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">John Doe</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="far fa-star fa-sm" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Inner */}
  </div>
  {/* Carousel wrapper */}
</>


        {/* <>
<video className="vid" src={video} autoPlay loop muted />
  <h2 className='name'>FLEXSPACE</h2>
</> */}
        {/* <> */}
          {/* First column */}
          {/* <div className="col-lg-6 mb-5 mb-lg-0"> */}
            {/* <div className="row">
              <div className="col-md-4">
                <div className="leftside">
            <div
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
                zIndex: 1
              }}
              className="card rounded-7 me-lg-n5"
            >
              <div className="card-body p-lg-5 shadow-5">
                <form> */}
                  {/* Name input */}
                  {/* <div className="mb-4">
                    <input type="text" id="form4Example1" className="form-control" placeholder='Enter Name' />

                  </div> */}
                  {/* Email input */}
                  {/* <div className="mb-4">
                    <input type="email" id="form4Example2" className="form-control" placeholder='Enter email' />

                  </div> */}
                  {/* Message input */}
                  {/* <div className="mb-4">
                    <textarea
                      className="form-control"
                      id="form4Example3"
                      placeholder='Message'
                      rows={4}
                      defaultValue={""}
                    />

                  </div> */}
                  {/* Checkbox */}
                  {/* <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form4Example4"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="form4Example4">
                      Send me a copy of this message
                    </label>
                  </div> */}
                  {/* Submit button */}
                  {/* <button type="submit" className="btn btn-primary btn-block mb-4">
                    Send
                  </button>
                </form>
                </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* First column */}


          {/* <div className="col-lg-6 mb-5 mb-lg-0"> */}
          {/* <div className="col-md-4">
            <div className="rightside">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96813.17497894862!2d-73.97484803586903!3d40.68692922859912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2spl!4v1671718528728!5m2!1sen!2spl"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
          {/* </div>
          </div>
        </> */}

      </div>
    </div>



  )
}

export default Home;

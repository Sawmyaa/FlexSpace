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
          {/* <h1 className='srv'>SERVICES</h1> */}
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
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                neque iaculis malesuada. Aenean gravida magna orci, non
                efficitur est porta id. Donec magna diam.
              </p>
              <p className="text-muted">
                Ad, at blanditiis quaerat laborum officia incidunt cupiditate
                dignissimos voluptates eius aliquid minus praesentium!
                Perferendis et totam ipsum ex aut earum libero accusamus
                voluptas quod numquam saepe, consequuntur nihil quia tenetur
                consequatur. Quis, explicabo deserunt quasi assumenda ea maiores
                nulla, et dolor saepe praesentium natus error reiciendis
                voluptas iste. Esse, laudantium ipsum animi, quos voluptatibus
                atque vero repellat sit eligendi autem maiores quasi cum
                aperiam. Aperiam rerum culpa accusantium, ducimus deserunt
                aliquid alias vitae quasi corporis placeat vel maiores explicabo
                commodi!
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

<>
  {/* First column */}
  <div className="col-lg-6 mb-5 mb-lg-0">
    <div
      style={{
        background: "hsla(0, 0%, 100%, 0.55)",
        backdropFilter: "blur(30px)",
        zIndex: 1
      }}
      className="card rounded-7 me-lg-n5"
    >
      <div className="card-body p-lg-5 shadow-5">
        <form>
          {/* Name input */}
          <div className="form-outline mb-4">
            <input type="text" id="form4Example1" className="form-control" />
            <label className="form-label" htmlFor="form4Example1">
              Name
            </label>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input type="email" id="form4Example2" className="form-control" />
            <label className="form-label" htmlFor="form4Example2">
              Email address
            </label>
          </div>
          {/* Message input */}
          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form4Example3"
              rows={4}
              defaultValue={""}
            />
            <label className="form-label" htmlFor="form4Example3">
              Message
            </label>
          </div>
          {/* Checkbox */}
          <div className="form-check d-flex justify-content-center mb-4">
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
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
  {/* First column */}
</>
<>
  {/* Second column */}
  <div className="col-lg-6 mb-5 mb-lg-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96813.17497894862!2d-73.97484803586903!3d40.68692922859912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2spl!4v1671718528728!5m2!1sen!2spl"
      width={600}
      height={450}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  {/* Second column */}
</>


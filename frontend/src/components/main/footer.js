import React from 'react'


const Footer = () => {
  return (
    // <section className="footer">
    //   <div className="videoDiv">
    //     <video src={video} loop autoPlay muted type="video/mp4"></video>
    //   </div>
    // </section>

<>
<footer className="bg-dark text-center text-white">
  {/* Grid container */}
  <div className="container p-4 pb-0" >
    {/* Section: Form */}
    <section className="">
      <form action="">
        {/*Grid row*/}
        <div className="row d-flex justify-content-center">
          {/*Grid column*/}
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for FlexSpace</strong>
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-5 col-12">
            {/* Email input */}
            <div className="form-white mb-4">
              <input
                type="email"
                id="form5Example29"
                className="form-control"
                placeholder="Email Address"
              />
             
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-auto">
            {/* Submit button */}
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </form>
    </section>
    {/* Section: Form */}
  </div>

</footer>
</>
  )
}

export default Footer

       
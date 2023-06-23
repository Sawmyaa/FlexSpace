import React from 'react'

const Footer = () => {
  return (
   
<footer className="bg-light text-center">
  
{/* Grid container */}
<div className="container p-4 pb-0">
   {/* Section: Social media */}
   <section className="mb-4">
        {/* Facebook */}
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#3b5998" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f" />
        </a>
        {/* Twitter */}
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#55acee" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter" />
        </a>
        {/* Google */}
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#dd4b39" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-google" />
        </a>
        {/* Instagram */}
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#ac2bac" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-instagram" />
        </a>
        {/* Linkedin */}
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#0082ca" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        {/* Github */}
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#333333" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-github" />
        </a>
      </section>
  {/* Section: Form */}
  <section className="">
    <form action="">
      {/*Grid row*/}
      <div className="row d-flex justify-content-center">
        {/*Grid column*/}
        <div className="col-auto">
          <p className="pt-2">
            <strong>Sign up for updates</strong>
          </p>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-md-5 col-12">
          {/* Email input */}
          <div className="form mb-4">
            <input
              type="email"
              id="form5Example27"
              className="form-control"
            />
            <label className="form-label" htmlFor="form5Example27">
             
            </label>
          </div>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-auto">
          {/* Submit button */}
          <button type="submit" className="btn btn-primary mb-4">
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
{/* Grid container */}
{/* Copyright */}
<div
  className="text-center p-3"
  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
>
  © 2020 Copyright:
  <a className="text-dark" href="https://mdbootstrap.com/">
    MDBootstrap.com
  </a>
</div>
{/* Copyright */}
</footer>

  
  )
}

export default Footer

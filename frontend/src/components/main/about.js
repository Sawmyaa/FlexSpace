import React from 'react'

const About = () => {
  return (
    <>
     <section className="about-section" style={{backgroundImage:'url("/logo3.jpg")'}}>
      <div className="inner-container">
        <h1 className="about">FlexSpace</h1>
        <p className="text">
        FlexSpace provides a valuable  service to users looking for  temporary office space and helps  office space providers manage their spaces efficiently.<br/>
        From a user-friendly interface to automated processes and cost-saving features, our platform offers a unique and efficient experience for both customers and business owners. We provide variety of prices, facilities, location at one places.
        </p>
        </div>
      
    
      </section>
      <div className='about' style={{backgroundColor:" rgb(216, 208, 199", border: "2px"}}>
      <div className='about-section1'>
       <div className="content-box-lg">
        <div className="container">
        
          <div className='row'>
          <div className="col-md-4">
            <div className="about-item text-center" style={{height:"248px"}}>
              <i className="fa fa-globe"></i>
              <h3>Location</h3><hr/>
              <p>Users can choose from a wide range  of available office spaces, including different  locations, sizes, and amenities, allowing them  to find the space that best suits their needs.
</p>

            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item text-center" style={{height:"248px"}}>
            <i className="fa fa-search"></i>
           <h3>Transparency</h3><hr/>
              <p>Users can view detailed information about available office spaces,  including photos, reviews, and pricing  information, allowing them to make informed  decisions about where to book.

</p>

            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item text-center" style={{height:"248px"}}>
              <i className="fa fa-location"></i>
              <h3>Flexibility</h3><hr/>
              <p>Users can book office spaces for a  shorter duration of time, making it easier for  them to adapt to changing business needs
</p>
</div>
            </div>
          </div>
        </div>
       </div>
      </div>
      </div><br/><br/>
      <div className='contact' style={{background:"bluish"}}>
        <h2 className="common-heading text-center" style={{fontWeight: 600, color:"Blue"}}>Feels Free to Contact us</h2><br/><br/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.465067513645!2d81.0564254745662!3d26.8887316611223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be209f58895a1%3A0x8328acaa3eddd4f!2sBabu%20Banarasi%20Das%20University!5e0!3m2!1sen!2sin!4v1687697822876!5m2!1sen!2sin" 
        width="100%" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
 </iframe>
 <div className='container mt-0'style={{background:"whitesmoke", height:"100%", width:"70%"}}>
    <form action="#" method="POST">
      <input type="text"
      name="username"
      placeholder='username'
      className="form-control form-control-lg"
      autoComplete='off'
      required/><br/>
      
      <input type="email"
      name="Email"
      placeholder='Email'
      className="form-control form-control-lg"
      autoComplete='off'
      required/><br/>
      <textarea 
      name="message" 
      cols="109" 
      rows="5"
      placeholder=' Write Something...'
      autoComplete='off required'></textarea><br/>
      <button type="submit"style={{background:"blue", color:"white", borderRadius:"5px", padding:"6px", border:"1px Blue"}}>Send Message</button>
    </form>
  </div>
 </div>
    
     
    </>
  )
}

export default About;

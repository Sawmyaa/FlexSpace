import React from 'react'

const About = () => {
  return (
    <>
     <section className="about-section" style={{backgroundImage:'url("/about4.webp")'}}>
      <div className="inner-container">
        <h1 className="about">FlexSpace</h1>
        <p className="text">
        FlexSpace provides a valuable  service to users looking for  temporary office space and helps  office space providers manage their spaces efficiently.<br/>
        From a user-friendly interface to automated processes and cost-saving features , our platform offers a unique and efficient experience for both customers and business owners. We provide variety of prices, facilities, location at one places.
        </p>
        </div>
      
    
      </section>
      <div className='about-section1'>
       <div className="content-box-lg">
        <div className="container">
          <div className='row'>
          <div className="col-md-4">
            <div className="about-item text-center">
              <i className="fa fa-globe"></i>
              <h3>Location</h3><hr/>
              <p>: Users can choose from a wide range  of available office spaces, including different  locations, sizes, and amenities, allowing them  to find the space that best suits their needs.
</p>

            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item text-center">
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
     

     
    </>
  )
}

export default About;

import React from 'react'

const VendorSignup = () => {
  return (
    <>
      <section className="h-100 h-custom gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col-8" >
              <div
                className="card card-registration"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">

                    <div className="p-5">
                      <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>
                        Registration Form
                      </h3>

                      <div className="flex1 mb-1">
                        <h5 className='info'>Organization Name</h5>
                        <input
                          type="text"
                          id="CName"
                          className="form-control form-control-lg"
                        />

                      </div><br />

                      <div className="flex2 mb-1">
                        <h5 className='info'>Company Address</h5>
                        <input
                          type="text"
                          id="CAddress"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Examplev4">
                          Street Address
                        </label><br />
                        <input
                          type="text"
                          id="CAddress"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Examplev4">
                          Street Address Line2
                        </label>
                      </div>



                      <div className="flex3 row">

                        <div className="col-md-6 mb-4 pb-2">
                          <div className="mb-1">

                            <input
                              type="text"
                              id="City"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="form3Examplev4">
                              City
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="mb-1">
                            <input
                              type="text"
                              id="state"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="form3Examplev4">
                              State/Province
                            </label>
                          </div>
                        </div>

                        <div className="mb-1">
                          <input
                            type="text"
                            id="Zcode"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="form3Examplev4">
                            Postal/Zip Code
                          </label>
                        </div>
                      </div>


                      <div className="flex4 row">
                        <h4 className='info'>Point to Contact</h4>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="mb-1">

                            <input
                              type="text"
                              id="fName"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="form3Examplev4">
                              First Name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="mb-1">

                            <input
                              type="text"
                              id="lName"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="form3Examplev4">
                              Last Name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="mb-1">
                          <h6 className='info'>Phone Number</h6>
                          <input
                            type="Number"
                            id="number"
                            className="form-control form-control-lg"
                          />

                        </div>
                      </div>

                      <div className="mb-1">
                        <h6 className='info'>E-mail</h6>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          placeholder='xyz@gmail.com'
                        />
                        <label className="form-label" htmlFor="form3Examplev4">
                          exmp@gmail.com
                        </label>

                      </div><br /><br />


                      <div className="flex5 mb-1">
                        <h5 className='info'>Company Overview</h5><hr /><br />
                        <h6 className="heading">General Details</h6>
                        <textarea className="form-control" rows="6"></textarea>
                        {/* </div> */}
                      </div><br /><br />
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="mb-1">
                          <h6 className='info'>Establishment Date</h6>
                          <input
                            type="date"
                            id="date"
                            className="form-control form-control-lg"

                          />
                          <label className="form-label" htmlFor="form3Examplev4">
                            Date
                          </label>

                        </div></div>

                      <div className="flex6 row">
                        <h4 className='info'>Banking Information</h4><hr /><br /><br />
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="mb-1">
                            <h6 className='info'>Bank Name</h6>
                            <input
                              type="text"
                              id="BankName"
                              className="form-control form-control-lg"
                            />

                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="mb-1">
                            <h6 className='info'>Beneficiary Name</h6>
                            <input
                              type="text"
                              id="BName"
                              className="form-control form-control-lg"
                            />

                          </div>
                        </div>
                        <div className="mb-1">
                          <h6 className='info'>Account Number</h6>
                          <input
                            type="Number"
                            id="AccountNumber"
                            className="form-control form-control-lg"
                          />

                        </div>

                      </div><br />


                      <div className="col-md-6 mb-4 pb-2">
                        <div className="mb-1">
                          <h6 className='info'>Date</h6>
                          <input
                            type="date"
                            id="date"
                            className="form-control form-control-lg"

                          />
                          <label className="form-label" htmlFor="form3Examplev4">
                            Date
                          </label>

                        </div></div>
                      <div className="flex7 md-1">
                        <h6 className="heading mb-0">Company Representative Signature</h6><br />
                        <input
                          id="img"
                          type="file"
                          className="form-control form-control-lg" 
                          />
                      </div><br />
                       <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form6Example8"
                          defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="form6Example8">
                          Create an account?
                        </label>
                      </div>
                      {/* Submit button */}
                      <button type="Submit" className="btn btn-primary btn-block mb-4">
                        Register
                      </button> </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

    </>
  )
}

export default VendorSignup;

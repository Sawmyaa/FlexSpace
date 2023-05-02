import React from 'react';

const Signup = () => {

  return (
    <>
      {/* Section: Design Block */}
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              'url("/Signup2.jpg")',
            height: "350px",
            
          }}
        />
        {/* Background image */}
        <div
          className="card1 mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            
            backdropFilter: "blur(5px)"
          }}
        >
          <div className="card-body1 py-5 px-md-4">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="flex-fill mb-0">
                        <input
                          type="text"
                          id="fname"
                          className="form-control"
                          placeholder='Enter ur Name'
                        />
                      </div>

                    </div>
                  </div>
                  {/* Email input */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="flex-fill mb-0">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder='enter ur email'
                      // autoComplete='off'
                      />
                    </div>
                  </div>
                  {/* Password input */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="flex-fill mb-0">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder='Enter password'

                      />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="flex-fill mb-0">
                      <input
                        type="password"
                        id="cpassword"
                        className="form-control"
                        placeholder='Repeat your password'
                      />
                    </div>
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example33"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" style={{ width: "300px" }} className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                  {/* Register buttons */}
                  <div className="text-center1">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn1 btn-link btn-floating mx-1"
                    >
                      <i className="fab1 fa-facebook-f" />
                    </button>
                    <button
                      type="button"
                      className="btn1 btn-link btn-floating mx-1"
                    >
                      <i className="fab1 fa-google" />
                    </button>
                    <button
                      type="button"
                      className="btn1 btn-link btn-floating mx-1"
                    >
                      <i className="fab1 fa-twitter" />
                    </button>
                    <button
                      type="button"
                      className="btn1 btn-link btn-floating mx-1"
                    >
                      <i className="fab1 fa-github" />
                    </button>
                  </div>
                </form>

              </div>

            </div>

          </div>

        </div>
      </section>
      {/* Section: Design Block */}
    </>

  )
}

export default Signup

          </div>

        </div>
      </section>
      {/* Section: Design Block */}
    </>

  )
}

export default Signup

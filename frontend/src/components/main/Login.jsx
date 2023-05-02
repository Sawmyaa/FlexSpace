import React from 'react'


const Login = () => {
  
  return (
    <section className="vh-60" style={{ backgroundColor: "#020e2e"}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block mt-6">
                  <img
                    src="https://i.pinimg.com/564x/f8/e9/53/f8e953bad531762109568bf8b4625956.jpg"
                    alt="login form"
                    className="img-fluid mt-7"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "88vh", width:"85vw" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "blue" }}
                        />
                        <span className="h3 fw-bold mb-0">Login</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <div className="mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                        <input
                         type="email"
                         id="email"
                         
                         className="form-control form-control-lg"

                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        <input
                         type="password"
                         id="password"
                         
                         className="form-control form-control-lg"
                        />

                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-primary btn-lg" style={{ width: "450px" }}
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      
                     
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Login

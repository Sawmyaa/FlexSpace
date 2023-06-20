import React from 'react';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom'; 



const Login = () => {

  const navigate = useNavigate();
  
  const loginForm = useFormik({
		initialValues: {
			email: '',
			password: ''
		},

		onSubmit: async (values) => {
			console.log(values);

			const res = await fetch('http://localhost:5000/user/authenticate', {
				method: 'POST',
				headers: {
          
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			});

			if(res.status === 200){
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text : 'Logged in Successfully'
				})

        const data = await res.json();
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data));
        navigate('/user/profile')

			}else if( res.status === 401){
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text : 'Invalid Credentials'
				})
			}
		}
	})
  
  return (
    <section className="vh-70" style={{ backgroundColor: "#020e2e"}}>
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block mt-6">
                  <img
                    src="https://i.pinimg.com/564x/f8/e9/53/f8e953bad531762109568bf8b4625956.jpg"
                    alt="login form"
                    className="img-fluid mt-7"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "85vh", width:"85vw" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={loginForm.handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        {/* <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "blue" }}
                        /> */}
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
                        onChange={loginForm.handleChange}
                        value={loginForm.values.email}
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
                         onChange={loginForm.handleChange}
                         value={loginForm.values.password}
                         className="form-control form-control-lg"
                        />

                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-primary btn-lg w-100" style={{ width: "450px" }}
                          type="submit"
                        >
                           {/* <NavLink className="nav-link" to="/user/Booking"> */}
                          Login
                          {/* </NavLink> */}
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                     
                      <p className='text-center mt-2'>Don't have account? <Link to='/main/signup'>SignIn</Link></p>
                       
                      
                     
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

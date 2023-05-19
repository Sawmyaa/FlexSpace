import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import Swal from 'sweetalert2'

const VendorSignUp = () => {

    const userData = async (formdata, { resetForm }) => {
        const res = await fetch('http://localhost:5000/vendor/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        console.log(res.status);

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Signed Successfully'
            })
            const data = await res.json();
            console.log(data)
            resetForm();
            // return data._id;
            // navigate('/user');
        }
    }



    return (
        <div className='signup-bg-image vh-100'>

            <div className='signup-card-position'  >

                <div className="card w-50 mx-auto"  style={{marginTop:"90px"}}>
                    <div className="card-body">
                        <h1 className="card-title text-center">CREATE VENDOR ACCOUNT</h1>

                        <Formik
                            initialValues={{ name: "", email: "", password: "" }}
                            onSubmit={userData}
                        >
                            {
                                ({ values, handleChange, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>

                                        <label>Name</label>
                                        <input required type="text" className='form-control mb-3' name="name" onChange={handleChange} value={values.name} />

                                        <label>Email</label>
                                        <input required type="email" className='form-control mb-3' name="email" onChange={handleChange} value={values.email} />

                                        <label>Password</label>
                                        <input required type="password" className='form-control mb-3' name="password" onChange={handleChange} value={values.password} />

                                        {/* <label>Organisation</label>
            <input required type="text" className='form-control mb-3' name="organisation" onChange={handleChange} value={values.organisation} /> */}

                                        <button type="submit" className="btn btn-primary w-100 mb-3">Submit</button>
                                    </form>
                                )
                            }
                        </Formik>

                        <p className='text-center'>Already have account? <Link to='/main/Vendorlogin'>LogIn</Link></p>


                    </div>
                </div>


            </div>

        </div>
    )
}

export default VendorSignUp

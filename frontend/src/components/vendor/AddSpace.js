import { Formik, useFormik } from 'formik';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddSpace = () => {

    const { spaceid } = useParams()

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('vendor')))
    console.log(currentUser)

    const [imageData, setImageData] = useState(null)
    const [vendor, setVendor] = useState([])

    const url = 'http://localhost:5000'


    const moreDetails = async () => {

        // console.log(id);

        const res = await fetch('http://localhost:5000/vendor/getbyid/' + spaceid)
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json()
            setVendor(data)
            console.log(data);
        }
    }
    const spaceData = async (formdata, { resetForm }) => {
        formdata.image = imageData;
        const res = await fetch('http://localhost:5000/addSpace/add', {
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
                text: 'Data Added Successfully'
            })
            const data = await res.json();
            console.log(data)
            resetForm();
            // return data._id;
            // navigate('/user');
        }
    }

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append("myfile", file);
        fetch(url + "/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
                // console.log(file.name);
                // console.log(file);
                setImageData(file.name);

            }
        });
    };


    useEffect(() => {
        moreDetails();
    }, []);





    return (
        <div className='container'>

            <div className="card border border-primary mt-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 my-auto">
                            <img src="https://images.pexels.com/photos/13620263/pexels-photo-13620263.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-100' />
                        </div>
                        <div className="col-md-6">
                            <div className="card shadow-0">
                                <div className="card-body">
                                    <h3 className="card-title text-center" style={{color:"blue", fontWeight:"600"}}>ADD OFFICE SPACE</h3>

                                    <Formik
                                        initialValues={{
                                            providerName: '',
                                            providerContact: '',
                                            providerEmail: '',
                                            name: '',
                                            size: '',
                                            rate: '',
                                            location: '',
                                            facilities: '',
                                            image: '',
                                            vendor: currentUser._id,
                                            screens: ''
                                        }}
                                        onSubmit={spaceData}>

                                        {({ values, handleChange, handleSubmit }) => (
                                            <form onSubmit={handleSubmit}>

                                                <div className="row">
                                                    <div className="col-md-6  mt-3">
                                                        <MDBInput className='' label="Provider's Name" id='providerName'
                                                            value={values.providerName} onChange={handleChange} type='text' />
                                                    </div>
                                                    <div className="col-md-6 mt-3">
                                                        <MDBInput className='' label="Provider's Contact" id='providerContact' value={values.providerContact} onChange={handleChange} type='number' />
                                                    </div>
                                                </div>

                                                <MDBInput className='mt-3' label="Provider's Email" id='providerEmail'
                                                    value={values.providerEmail} onChange={handleChange} type='email' />
                                                <MDBInput className='mt-3' label='Hall Name' id='name'
                                                    value={values.name} onChange={handleChange} type='text' />

                                                <div className="row">
                                                    <div className="col-md-6  mt-3">
                                                        <MDBInput className='' label='Size (in sq feet)' id='size'
                                                            value={values.size} onChange={handleChange} type='text' />
                                                    </div>
                                                    <div className="col-md-6 mt-3">
                                                        <MDBInput className='' label='Rate (per hours)' id='rate' value={values.rate} onChange={handleChange} type='text' />
                                                    </div>
                                                </div>
                                                <MDBTextArea className='my-3' label='Location' rows={3} id='location' value={values.location} onChange={handleChange} />
                                                <MDBTextArea className='my-3' label='Facilities' id='facilities' value={values.facilities} onChange={handleChange} rows={4} />

                                                <div className="my-3">
                                                    <label className="form-label mx-2" for="typeText">Upload Image</label>
                                                    <input type="file" id="" onChange={uploadFile} />
                                                </div>

                                               



                                                <button type="submit" className="btn btn-success w-100">
                                                    Submit
                                                </button>
                                            </form>
                                        )}

                                    </Formik>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>





            </div>
        </div>
    )
}

export default AddSpace
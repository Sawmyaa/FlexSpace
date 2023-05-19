import { Formik } from 'formik';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateData = () => {

    const { id } = useParams();

    const [spaceData, setSpaceData] = useState(null)

    const getSpaceDataById = async () => {
        const res = await fetch('http://localhost:5000/add_space/getbyid/' + id)
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setSpaceData(data)
        }
    }

    useEffect(() => {
        getSpaceDataById();
    }, [])

    const update_space_data = async (formdata) => {
        const res = await fetch('http://localhost:5000/add_space/update/' + id, {
            method: 'PUT',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(res.status);

        if (res.status === 200) {
            const data = await res.json();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data Updated Successfully'
            })
            console.log(data)
        }
    }

    const showUpdatedData = () => {
        if (spaceData) {
            return (
                <div>
                    <div className="card border border-primary mt-5 w-75 mx-auto">

                        <div className="card-body">
                            <h1 className='text-center mb-4'>Update Space Data</h1>
                            <Formik
                                initialValues={spaceData}
                                onSubmit={update_space_data}>

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

                                        <MDBInput className='mt-3' label='Name' id='name'
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

                                        <button type="submit" className="btn btn-success w-100">
                                            Submit
                                        </button>

                                    </form>
                                )}

                            </Formik>
                        </div>

                    </div>

                </div>
            )
        }
    }



    return (
        <div className='container mt-5'>
            {showUpdatedData()}
        </div>
    )
}

export default UpdateData
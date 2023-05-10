import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const ManageSpace = () => {

    const [currentVendor, setCurrentVendor] = useState(JSON.parse(sessionStorage.getItem('vendor')))
    console.log(currentVendor);


    const [spaceData, setSpaceData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchSpaceData = async () => {
        setLoading(true);
        const res = await fetch('http://localhost:5000/addSpace/getbyuser/' + currentVendor._id)
        setLoading(false);
        console.log(res.status)
        // console.log(currentUser._id)

        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setSpaceData(data)
        }
    }

    useEffect(() => {
        fetchSpaceData();
    }, [])

    const deleteSpaceData = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/addSpace/delete/' + id, {
            method: "DELETE",
        })
        console.log(res.status);
        if (res.status === 200) {
            fetchSpaceData();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data Deleted Successfully'
            })
        }
    }




    const displayDetails = () => {

        if (!loading && spaceData) {
            return (
                <div className='row'>
                    {
                        spaceData.map((space) => (

                            // <div className="row">

                            <div className="col-md-6">
                                <Accordion className='mt-3 border border-success rounded-6'>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography><h2>{space.name}</h2></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <Typography>
                                                Provider's Name : {space.providerName}
                                            </Typography>
                                            <Typography>
                                                Provider's Contact : {space.providerContact}
                                            </Typography>
                                            <Typography>
                                                Provider's Email : {space.providerEmail}
                                            </Typography>
                                            <Typography>
                                                Size : {space.size} sq feet
                                            </Typography>
                                            <Typography>
                                                Rate : ₹ {space.rate} per hours
                                            </Typography>
                                            <Typography>
                                                Location : {space.location}
                                            </Typography>
                                            <Typography>
                                                Facilities : {space.facilities}
                                            </Typography>

                                            <img src={'http://localhost:5000/'+space.image} alt="space image" width="50%" height="50%" className='my-3'/>

                                        </Typography>
                                    </AccordionDetails>
                                    <Link to={'/vendor/updateData/' + space._id}>
                                        <Button variant="contained" color='success' sx={{ marginLeft: '15px', marginBottom: '15px' }}>Update Data</Button>
                                    </Link>
                                    <Button variant="contained" color='error' sx={{ marginLeft: '15px', marginBottom: '15px' }} onClick={() => (deleteSpaceData(space._id))}>Delete</Button>
                                </Accordion>
                            </div>

                            // </div>
                        ))


                    }
                </div>

            )
        }

    }





    return (

        // <div className='container'>
        //     <Accordion className='mt-3 border border-success rounded-6'>
        //         <AccordionSummary
        //             expandIcon={<ExpandMoreIcon />}
        //             aria-controls="panel1a-content"
        //             id="panel1a-header"
        //         >
        //             <Typography><h2>Accordion 1</h2></Typography>
        //         </AccordionSummary>
        //         <AccordionDetails>
        //             <Typography>
        //                 <Typography>
        //                     Size : {spaceData.size} sq feet
        //                 </Typography>
        //                 <Typography>
        //                     Rate : {spaceData.rate} per hours
        //                 </Typography>
        //                 <Typography>
        //                     Location : {spaceData.location}
        //                 </Typography>
        //                 <Typography>
        //                     Facilities : {spaceData.facilities}
        //                 </Typography>
        //             </Typography>
        //         </AccordionDetails>
        //     </Accordion>
        // </div>

        <div className='container'>
            {displayDetails()}
        </div>
    )
}

export default ManageSpace
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SpaceDetails = () => {

  const { spaceid } = useParams()
  const [space, setSpace] = useState([])

  const moreDetails = async () => {

    // console.log(id);

    const res = await fetch('http://localhost:5000/addSpace/getbyid/' + spaceid)
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json()
      setSpace(data)
      console.log(data);
    }
  }

  useEffect(() => {
    moreDetails();
  }, [])

  const displayDetails = () => {
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{space.name}</h2>

          <div className="row">
            <div className='col-md-8'>
              <p className="card-text">
                <b>Size :</b> {space.size} sq feet
              </p>
              <p className="card-text">
                <b>Rate : ₹</b> {space.rate} per hours
              </p>
              <p className="card-text">
                <b>Location :</b> {space.location}
              </p>
              <p className="card-text">
                <b>Facilities :</b> {space.facilities}
              </p>
              <p className="card-text">
                <b>Vendor's Name :</b> {space.providerName}
              </p>
              <p className="card-text">
                <b>Vendor's Contact :</b> {space.providerContact}
              </p>
              <p className="card-text">
                <b>Vendor's Email :</b> {space.providerEmail}
              </p>
            </div>

            <div className="col-md-4 ">
              <img src={'http://localhost:5000/' + space.image} alt=""
                className='w-100 rounded-5' />
            </div>
          </div>

          <Link
            to={`/user/book/${space._id}`}
            className="btn btn-primary btn-lg mt-5"
            type="button"
          >
            Book Now
          </Link>
        </div>
      </div>
    )
  }


  return (
    <div className='container'>

      {displayDetails()}

    </div>
  )
}

export default SpaceDetails
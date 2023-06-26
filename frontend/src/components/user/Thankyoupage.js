import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import app_config from '../../config';

const Thankyoupage = () => {

    const navigate = useNavigate();
    const { apiUrl } = app_config;
    const [orderData, setOrderData] = useState(JSON.parse(sessionStorage.getItem("orderData")));
    console.log(orderData);
    const addOrder = async () => {
        const response = await fetch(`${apiUrl}/book/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });
        const data = await response.json();
        console.log(data);
        if (data._id) {
          Swal.fire({
            title: "Success!",
            text: "Your order has been placed successfully",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/main/home");
            }
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      }


    useEffect(() => {
        addOrder();
    }, []);
    

  return (
    <div>
      
    </div>
  )
}

export default Thankyoupage

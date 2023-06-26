import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import {
  Elements
} from "@stripe/react-stripe-js";
import CheckoutPage from './CheckoutPage';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51NBup2SEmL2cPMzT0bC06N2glGWdVBD4LdAqzVeL3TebuLedCrgf3QusMBL1bbZnbuhYGfI9ZQBzgLNriBmmWfrF00yihlBE0W");

const Booking = () => {
  const { apiUrl } = app_config;
  const { spaceid } = useParams();

  const navigate = useNavigate();

  const [clientSecret, setClientSecret] = useState("");
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [spaceDetails, setSpaceDetails] = useState(null);

  const spaceDetailsById = async () => {
    const response = await fetch(`${apiUrl}/addSpace/getbyid/${spaceid}`);
    const data = await response.json();
    console.log(data);
    setSpaceDetails(data);
  };

  const bookSpace = async () => {
    fetch(apiUrl + "/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: spaceDetails.rate }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }

  useEffect(() => {
    spaceDetailsById();
  }, []);

  const saveOrder = async () => {
    const response = await fetch(`${apiUrl}/book/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        space: spaceid,
        user: currentUser._id,
        amount: spaceDetails.rate,
        paymentDetails: "Payment Done",
        createdAt: new Date()
      })
    });

    console.log(response.status);

    if (response.status === 200) {
      Swal.fire({
        title: "Success",
        text: "Space Booked Successfully",
        icon: "success",
      })
      navigate("/user/managebooking");
    } else {
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
      })
    }
  }

  return (
    <section>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div className="d-flex flex-row align-items-center">
            <h4 className="text-uppercase mt-1">Space Details</h4>
          </div>
          <a href="#!">Cancel and return to the website</a>
        </div>
        {spaceDetails !== null ? (
          <div className="row">
            <div className="col-md-7 col-lg-7 col-xl-6 mb-4 mb-md-0">
              <img
                className="w-100"
                src={apiUrl + "/" + spaceDetails.image}
                alt=""
              />
              <h4 className="mb-3">{spaceDetails.name}</h4>
              <p>{spaceDetails.location}</p>
              <div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row mt-1">
                    <h5>Amount Payable</h5>
                  </div>
                  <div className="d-flex flex-row align-items-center text-primary">
                    <p className="fw-bold text-success ms-1 display-3">
                      ₹{spaceDetails.rate}
                    </p>
                  </div>
                </div>
                <p>
                  Insurance claim and all neccessary dependencies will be
                  submitted to your insurer for the covered portion of this
                  order.
                </p>
                <div
                  className="p-2 d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "#eee" }}
                >
                  <span>Aetna - Open Access</span>
                  <span>Aetna - OAP</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row mt-1">
                    <h6>Patient Balance</h6>
                    <h6 className="fw-bold text-success ms-1">$13.24</h6>
                  </div>
                  <div className="d-flex flex-row align-items-center text-primary">
                    <span className="ms-1">Add Payment card</span>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row mt-1">
                    <h6>Patient Balance</h6>
                    <h6 className="fw-bold text-success ms-1">$13.24</h6>
                  </div>
                  <div className="d-flex flex-row align-items-center text-primary">
                    <span className="ms-1">Add Payment card</span>
                  </div>
                </div>

                <div className="btn btn-success btn-lg btn-block" onClick={saveOrder}>
                  Complete Booking
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <button className="btn btn-primary" onClick={bookSpace}>Book Now</button>
                  {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                      <CheckoutPage spaceDetails={spaceDetails} />
                    </Elements>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 col-xl-4 offset-lg-1 offset-xl-2">
              <div className="p-3" style={{ backgroundColor: "#eee" }}>
                <span className="fw-bold">Order Recap</span>
                <div className="d-flex justify-content-between mt-2">
                  <span>contracted Price</span> <span>$186.86</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Amount Deductible</span> <span>$0.0</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Coinsurance(0%)</span> <span>+ $0.0</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Copayment </span> <span>+ 40.00</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-2">
                  <span className="lh-sm">
                    Total Deductible,
                    <br />
                    Coinsurance and copay
                  </span>
                  <span>$40.00</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span className="lh-sm">
                    Maximum out-of-pocket <br />
                    on insurance policy
                  </span>
                  <span>$40.00</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-2">
                  <span>Insurance Responsibility </span> <span>$71.76</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Patient Balance </span> <span>$13.24</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-2">
                  <span>Total </span>{" "}
                  <span className="text-success">$85.00</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Booking;
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Feedback = () => {
  const navigate = useNavigate();

  const feedbackForm = useFormik({
    initialValues: {
      feedback: '',
      createdAt: new Date()
    },
    onSubmit: async (values) => {
      // console.log(values);
      //making request to backend
      //1. address url
      //2.request method
      //3. data
      //4. data formate be start

      const res = await fetch('http://localhost:5000/feedback/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      console.log(await res.text());
      console.log('form submitted');

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Nice',
          text: 'Your Feedback Submitted Successfully'
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Oops.....',
          text: 'Something went wrong!'
        });
      }
    }
  });

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: '#4b371c' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">User Feedback</p>
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1">
                      <img src="https://usetrust.io/wp-content/uploads/2021/02/customer-feedback-tools.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
                      <form className="mx-1 mx-md-4" onSubmit={feedbackForm.handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="flex-fill mb-0">
                            <textarea
                              type="text"
                              id="feedback"
                              rows={10}
                              value={feedbackForm.values.feedback}
                              onChange={feedbackForm.handleChange}
                              className={'form-control'}
                              placeholder="Enter your feedback"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-primary" style={{ width: '85%' }}>
                            Submit Feedback
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;

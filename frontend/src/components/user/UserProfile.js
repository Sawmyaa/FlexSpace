import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import app_config from '../../config';

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const url = app_config.apiUrl;
  const { themeColorLight, apiUrl } = app_config;
  const [passwordHidden, setPasswordHidden] = useState(true);
 

  const updateProfile = async (data) => {
    console.log(data);
    const res = await fetch(url + '/user/update/' + currentUser._id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);
    const userdata = (await res.json());
    console.log(userdata);
    setCurrentUser(userdata);
    sessionStorage.setItem('user', JSON.stringify(userdata));
  };

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    // setSelImage(file.name);
    const fd = new FormData();
    fd.append('myfile', file);
    fetch(url + '/util/uploadfile', {
      method: 'POST',
      body: fd
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
        updateProfile({ avatar: file.name });
      }
    });
  };

  const deleteAccount = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
    return;
    const res = await fetch(url + '/user/delete/' + currentUser._id, {
      method: 'DELETE'
    });
    if (res.status === 200) {
      sessionStorage.removeItem('user');
      window.location.href = '/';
    }
  };

  const profileForm = useFormik({
    initialValues: currentUser,
    onSubmit: updateProfile
  });

  return (
    <div>
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: 200 }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: 150 }}>
                    <img
                      src={apiUrl+'/'+(currentUser.avatar ? currentUser.avatar : 'user-placeholder.jpg')}
                      alt="user profile"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: 150, zIndex: 1 }}
                    />
                    <label htmlFor='profile-image' className='upload-btn' style={{ zIndex: 1 }}>
                      Upload Image
                    </label>
                    <input type='file' hidden onChange={uploadProfileImage} id="profile-image" />
                  </div>
                  <div className="ms-3" style={{ marginTop: 130 }}>
                    <h5>{currentUser.name}</h5>
                    <p>{currentUser.email}</p>
                  </div>
                </div>
                
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1 mt-5">Update Profile</p>
                    <form onSubmit={profileForm.handleSubmit}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className=" mb-4">
                    <div className="col">
                      <div className="">
                      <label className="form-label" htmlFor="form7Example1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={profileForm.values.name}
                          onChange={profileForm.handleChange}
                          className="form-control"
                        />
                        
                      </div>
                    </div>
                    
                  </div>
                  <div className="mb-4">
                      <div className="">
                      <label className="form-label" htmlFor="form7Example2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={profileForm.values.email}
                          onChange={profileForm.handleChange}
                          className="form-control"
                        />
                        
                      </div>
                    </div>
                  {/* Text input */}
                  <div className=" mb-4">
                  <label className="form-label" htmlFor="form7Example3">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={profileForm.values.password}
                      onChange={profileForm.handleChange}
                      className="form-control"
                    />
                   
                  </div>
                  
                  
                 
                  
                  <button className="btn btn-primary"> <i class="fa-solid fa-arrows-rotate"></i> Update Profile</button>
                </form>
                  </div>
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;

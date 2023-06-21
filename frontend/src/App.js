import './App.css';
import './components/main/about.css';
import './components/main/home.css';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Signup from './components/main/Signup';
import Login from './components/main/Login';
import About from './components/main/about';
import VendorSignUp from './components/main/VendorSignup';
import VendorLogin from './components/main/VendorLogin';
import Vendor from './components/vendor';
import AddSpace from './components/vendor/AddSpace';
import BrowseSpace from './components/main/BrowseSpace';
import { Component, useState } from 'react';
import AdminProvider from './context/AdminProvider';
import UserProvider from './context/UserProvider';
import VendorProvider from './context/VendorProvider';
import ASignUp from './components/main/ASignUp';
import ALogin from './components/main/ALogin';
import UpdateData from './components/vendor/UpdateData';
import User from './components/user';
import UserProfile from './components/user/UserProfile';
import ManageBookings from './components/user/ManageBookings';
import VendorAuth from './auth/VendorAuth';
import ManageSpace from './components/vendor/ManageSpace';
import Booking from './components/user/Booking';
import SpaceDetails from './components/main/SpaceDetails';
import CompareSpaces from './components/vendor/CompareSpaces';
import Thankyoupage from './components/user/Thankyoupage';
import UserAuth from './auth/UserAuth';
import Feedback from './components/main/Feedback';

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [currentVendor, setCurrentVendor] = useState(JSON.parse(sessionStorage.getItem('vendor')));
  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));
  return (
    <div>
      <BrowserRouter>
        <AdminProvider currentAdmin={currentAdmin}>
          <UserProvider currentUser={currentUser}>
            <VendorProvider currentVendor={currentVendor}>
              <Routes>
                <Route path="/" element={<Navigate to="/main/home" />} />
                <Route path="main" element={<Main />}>
                  <Route path="home" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="login" element={<Login />} />
                  <Route path="vendorSignup" element={<VendorSignUp />} />
                  <Route path="vendorLogin" element={<VendorLogin />} />
                  <Route path="browseSpace" element={<BrowseSpace />} />
                  <Route path="browseSpace/:location/:price" element={<BrowseSpace />} />
                  <Route path="spacedetails/:spaceid" element={<SpaceDetails />} />
                  <Route path="compare" element={<CompareSpaces />} />
                  <Route path="ASignUp" element={<ASignUp />} />
                  <Route path="ALogin" element={<ALogin />} />
                  <Route path="feedback" element={ <UserAuth> <Feedback /> </UserAuth>} />
                </Route>

                <Route
                  path="vendor"
                  element={
                    <VendorAuth>
                      {' '}
                      <Vendor />{' '}
                    </VendorAuth>
                  }
                >
                  <Route path="add_space" element={<AddSpace />} />
                  <Route path="manage_space" element={<ManageSpace />} />
                  <Route path="updateData/:id" element={<UpdateData />} />
                </Route>

                <Route
                  path="user"
                  element={
                    <UserAuth>
                      <User />
                    </UserAuth>
                  }
                >
                  <Route path="profile" element={<UserProfile />} />
                  <Route path="managebooking" element={<ManageBookings />} />
                  <Route path="updateData" element={<UpdateData />} />
                  <Route path="thankyoupage" element={<Thankyoupage />} />
                  <Route path="book/:spaceid" element={<Booking />} />
                </Route>
              </Routes>
            </VendorProvider>
          </UserProvider>
        </AdminProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

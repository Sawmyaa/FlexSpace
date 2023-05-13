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
import { useState } from 'react'
import AdminProvider from'./context/AdminProvider';
import UserProvider from'./context/UserProvider';
import VendorProvider from'./context/VendorProvider';
import ASignUp from './components/main/ASignUp';
import ALogin from './components/main/ALogin';

import ManageSpace from './components/vendor/ManageSpace';
import UpdateData from './components/vendor/UpdateData';






function App() {
  
  const [currentUser, setCurrentUser] = useState(JSON.parse(
    sessionStorage.getItem("user")));
  const [currentVendor, setCurrentVendor] = useState(JSON.parse(
    sessionStorage.getItem("vendor")));
  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(
    sessionStorage.getItem("admin")));
  

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
                  <Route path="signup" element={<Signup/>}/>
                  <Route path="login" element={<Login />} />
                  <Route path="vendorSignup" element={<VendorSignUp/>} />
                  <Route path="vendorLogin" element={<VendorLogin />} />
                  <Route path="browseSpace" element={<BrowseSpace />} />
                  <Route path="ASignUp" element={<ASignUp/>}/>
                  <Route path="ALogin" element={<ALogin/>}/>
               


                </Route>
                
                  <Route path="vendor" element={<Vendor />}>
                    <Route path="addSpace" element={<AddSpace />} />
                    <Route path='manage_space' element={<ManageSpace/>}/>
                    <Route path="updateData" element={<UpdateData/>}/>
                  </Route>

                  <Route path="user" element={<User />}>
                    <Route path="profile" element={<UserProfile/>} />
                    <Route path='managebooking' element={<ManageBookings/>}/>
                    <Route path="updateData" element={<UpdateData/>}/>
                  </Route>
                
              </Routes>
            </VendorProvider>
          </UserProvider>
        </AdminProvider>
      </BrowserRouter>

    </div >
  );
}

export default App;


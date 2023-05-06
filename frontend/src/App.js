import './App.css';
import './components/main/about.css';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Signup from './components/main/Signup';
import Login from './components/main/Login';
import About from './components/main/About';
import Vendor from './components/vendor';
import AddSpace from './components/vendor/AddSpace';
import VendorProfile from './components/vendor/VendorProfile';

// import Vendor from './components/vendor'
// import AddSpace from './components/vendor/AddSpace';
// import VendorProfile from './components/vendor/VendorProfile';
// import Profile from './components/main/Profile';




function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />}>

            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="Profile.js" element={<Profile />} /> */}
          </Route>

        </Routes>
        <Routes>
          <Route path="vendor" element={<Vendor />}>
            <Route path="addSpace" element={<AddSpace />} />
            <Route path="VendorProfile" element={<VendorProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

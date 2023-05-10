import './App.css';
import './components/main/about.css';
import './components/main/home.css';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Signup from './components/main/Signup';
import Login from './components/main/Login';
import About from './components/main/about';
import Vendor from './components/vendor';
import AddSpace from './components/vendor/AddSpace';
import VendorSignup from './components/vendor/VendorSignup';
import VendorLogin from './components/vendor/VendorLogin';
// import ManageSpace from './components/vendor/ManageSpace';
 





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
           
          </Route>

        </Routes>
        <Routes>
          <Route path="vendor" element={<Vendor />}>
            {/* <Route path="manageSpace" element={<ManageSpace/>}/> */}
            <Route path="addSpace" element={<AddSpace />} />
            <Route path="VendorSignup" element={<VendorSignup/>}/>
            <Route path="VendorLogin" element={<VendorLogin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

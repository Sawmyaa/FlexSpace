// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Signup from './components/main/Signup';
import Login from './components/main/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';


function App() {
  return (
  
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Navigate to="/Main/Home"/>}> */}
        <Route path="main" element={<Main />} >
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="footer" element={<Footer />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;

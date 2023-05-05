import './App.css';
import './components/main/about.css';
import {BrowserRouter,Navigate, Routes, Route} from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Signup from './components/main/Signup';
import Login from './components/main/Login';
import About from './components/main/About';



function App() {
  return (
    <div>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Navigate to="/main/home"/>}/>
        <Route path="main" element={<Main />}>

          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login/>}/>
          
        </Route>
      </Routes>
      </BrowserRouter>
       </div>
  );
}

export default App;

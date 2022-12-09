import React from 'react';
import Signup from './Components/Login Page/Signup';
import Home from './Components/Home Page/Home';
import './App.css';
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import NavBar from './Components/Home Page/NavBar';
import Footer from './Components/Home Page/Footer';
import Login from './Components/Login Page/Login';
import ForgetPassword from './Components/Login Page/ForgetPassword';
import AllPlans from './Components/Plan Page/AllPlans';
import Profile from './Components/Profile Page/Profile';
import PlanDetail from './Components/PlanDetail Page/PlanDetail';
function App() {

  return (
    <Router>
      {/* is providing the data that is your user logged in or not */}
        <NavBar />
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/profilePage' element={ <Profile />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/forgetPassword' element={<ForgetPassword />}/>
         
          <Route path='/allPlans' element={<AllPlans />}/>
          <Route path='/planDetail' element={<PlanDetail />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Footer />
    </Router>
  );
}
export default App;

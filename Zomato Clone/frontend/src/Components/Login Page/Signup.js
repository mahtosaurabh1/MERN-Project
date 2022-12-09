import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../Styles/login.css';

function Signup() {
    // react-router-dom
    const [name, nameSet] = useState("");
    const [password, passwordSet] = useState("");
    const [email, emailSet] = useState("");
    const [confirm, setConfirm] = useState("");

    let navigate=useNavigate();

    const handleSignup = async () => {
        console.warn(name, password, email,confirm);
        let result=await fetch('http://localhost:5000/register',{
          method:'post',
          body:JSON.stringify({name,email,password,confirm}),
          headers:{
            'Content-type':'application/json'
          },
        });
        result = await result.json();
        localStorage.setItem('user',JSON.stringify(result))
        // console.warn(result);
        if(result){
         navigate('/')
        }
  
      }
// click
    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>SIGN UP</h1>
                    <div className="line"></div>
                </div>
                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Name</div>
                        <input className="name input" type="text" name="Name" placeholder="Your Name" required="" onChange={(e) => nameSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => passwordSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Confirm  Password</div>
                        <input className="confirmPassword input" type="password" name="ConfirmPassword" placeholder="**********" onChange={(e) => setConfirm(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleSignup}>
                        Sign Up
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Signup;

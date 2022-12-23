import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Styles/login.css'
import {url} from "../../api.js";
function Login() {

    const [password, passwordSet] = useState("")
    const [email, emailSet] = useState("");
    const [loading, setLoading] = useState(false);

    let navigate=useNavigate();

    const handleLogin = async () => {
        let result=await fetch(`${url}/login`,{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-type':'application/json'
              },
        })
        result=await result.json();
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')

        }else{
            alert('email does not exist')
        }
        console.log(result);
    }

    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>LOGIN</h1>
                    <div className="line"></div>
                </div>

                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => passwordSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleLogin}>
                        Login
                    </button>
                    <div className='otherOption'>
                        <button className=" otherbtns form-button" type="submit" >
                            <Link to="/signup" className="otherbtns">Sign Up</Link>
                        </button>
                        <button className=" otherbtns form-button" type="submit">
                            <Link to="/forgetPassword" className="otherbtns">Forget Password</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
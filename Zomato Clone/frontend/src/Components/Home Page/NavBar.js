import React, {  useEffect } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import '../Styles/nav.css'

function NavBar() {
    // console.log(localStorage.getItem("user"));
    let user=localStorage.getItem('user')
    let navigate=useNavigate();

    function logout(){
     try{
        localStorage.clear();
        navigate('/login')
     }catch{
        console.log("problem ")
     }
    }
    useEffect(() => {
        let navBar = document.querySelector("nav");

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 0) {
                navBar.setAttribute("class", "activeNavBar")
            }
            else if ((window.pageYOffset === 0)) {
                navBar.classList.remove("activeNavBar")
            }
        });
    }, []);
    
    return (
        <nav>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allPlans">Plans</Link></li>
                    {user ?
                        <>
                             <li>
                                <Link to="/profilePage">{JSON.parse(user).name}</Link>
                            </li>
                        
                            <li>
                                <Link to="" onClick={logout}>Logout</Link>
                            </li>
                        </>
                        :
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

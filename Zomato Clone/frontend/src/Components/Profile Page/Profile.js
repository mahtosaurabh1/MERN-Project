import React, { useState } from 'react';
import '../Styles/profile.css';


function Profile() {
    let auth=localStorage.getItem('user')
 
    const handleClick = async () => {
       
    }
   
    return (
        <div className="container-grey">

            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>Profile</h1>\
                    <div className="line"></div>
                    <div className="profileImage">
                        <img src='' />
                    </div>
                </div>
                <div className="loginBox">
                    <div className="entryBox">
                        <input type="file" />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" value={JSON.parse(auth).email} />
                    </div>
                   
                   
                    <div className="entryBox">
                        <div className="entryText">Name</div>
                        <input className="password input" type="text" value={JSON.parse(auth).name} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleClick}>
                        Hello
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile

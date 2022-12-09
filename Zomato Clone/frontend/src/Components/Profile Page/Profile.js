import React, { useState } from 'react';
import '../Styles/profile.css';


function Profile() {
    const [password, passwordSet] = useState('')
    const [passwordCnf, passwordCnfSet] = useState('')
    const [email, emailSet] = useState('');
    const [name, nameSet] = useState('');
 
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
                        <input className="email input" type="email" value={email} onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input className="password input" type="text" value={password} onChange={(e) => passwordSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Confirm Password</div>
                        <input className="password input" type="text" value={passwordCnf} onChange={(e) => passwordCnfSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Name</div>
                        <input className="password input" type="text" value={name} onChange={(e) => nameSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleClick}>
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile

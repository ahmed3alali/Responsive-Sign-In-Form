import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { useMediaQuery } from 'react-responsive';
import HttpsIcon from '@mui/icons-material/Https';
import '../components/LoginForm.css'
export const LoginForm = () => {
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const [action,setAction] = useState("Login");



    return (
<div className={`container ${isMobile ? 'mobile' : ''}`}>

        <div className='container'>
        <div className="Form-title">

<p> {action} </p>
</div>
            <div className="header">
            </div>

    
            <div className="underline"></div>
            <div className="inputs">


{action==="Login"?<div></div>:




<div className="input">
<div className="account-icon">

<AccountCircleIcon fontSize="large"></AccountCircleIcon>
</div>

<input type='text' placeholder='Enter your name'></input>
</div>






}

         


                <div className="input">
                    <div className="email-icon">
                        <EmailIcon fontSize='large'></EmailIcon>

                    </div>

                    <input type='email' placeholder='Email address'></input>

                </div>


                <div className="input">

                    <div className="password-icon">

                    <HttpsIcon fontSize='large'></HttpsIcon>
                    </div>
                   

                    <input type='password'placeholder='password'></input>


                </div>


{action==="Sign Up"?<div></div>:



<div className="forgot-password">Forgot Your Password? <span>Click Here</span></div>


}
                <div className="submitContainer">
                    
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>



                </div>



            </div>



        </div>

        </div>
    )

}
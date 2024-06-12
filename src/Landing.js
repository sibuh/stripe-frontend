import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'
const Landing = () => {
    return ( 
        <div className="landing-page">
            <div className="landing-page-header">
                <img className="logo-image" src={logo} alt="logo" />   
                <div className="signup-and-login">
                    <Link to="/signup" className="sign-up">Sign up</Link>
                    <Link to="/login" className="login"> Login</Link>
                </div>
            </div>
           <div className="landing-page-main">
           <h1 className="landing-page-title">Events you do not want to miss</h1>
                 <div className="event-list">
                    <p>Music Concert</p>
                    <p>Fund Raising</p>
                    <p>Church Programs</p>
                    <p>Graduation cermony</p>
                    <p>Others</p>
                </div>
           </div>
           
           
        </div>
     );
}
 
export default Landing;
import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'
import Carousel from "./Carousel";

const images = [

  ];
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
                 <ul className="event-list">
                    <li>Music Concert</li>
                    <li>Fund Raising</li>
                    <li>Church Programs</li>
                    <li>Graduation cermony</li>
                    <li>Others</li>
                </ul>
                <Carousel images={images} />
           </div>
           
           
        </div>
     );
}
 
export default Landing;
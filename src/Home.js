import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'
const Home = () => {
    return ( 
        <div className="home-page">
            <div className="header">
                <img className="logo-image" src={logo} alt="logo" /> <h1 className="home-page-title">Events you do not want to miss</h1>
            </div>
           
            <ul className="event-list">
                <li>Music Concert</li>
                <li>Fund Raising</li>
                <li>Church Programs</li>
                <li>Graduation cermony</li>
                <li>Others</li>
            </ul>
            <Link to="/signup" className="sign-up">Sign up</Link>
            <Link to="/login" className="login"> Login</Link>
        </div>
     );
}
 
export default Home;
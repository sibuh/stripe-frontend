import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate=useNavigate();
    function handleClick(){
        navigate("/signup");

    }

    return ( 
        <div className="home-page">
            <h1 className="home-page-title">Events you do not want to miss</h1>
            <ul className="event-list">
                <li>Music Concert</li>
                <li>Fund Raising</li>
                <li>Church Programs</li>
                <li>Graduation cermony</li>
                <li>Others</li>
            </ul>
            <button className="sign-up-btn" onClick={handleClick}>Sign up to see more</button>
        </div>
     );
}
 
export default Home;
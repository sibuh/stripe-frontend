import React, { useState } from "react";
import axios from "./api/axios";
import Products from "./Products";
const LoginUrl="/login";

const Login = () => {

    const[loginData,setLoginData]=useState({username:"",password:""});
    const [success,setSuccess]=useState(false);
    const [errMsg,setErrMsg]=useState('');
    // const navigate=useNavigate();

    function handleChange(event){
        event.preventDefault();
        
        return setLoginData({
            ...loginData,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = async(event)=>{
       event.preventDefault();
       try{
        const response = await axios.post(
            LoginUrl,
            JSON.stringify(loginData),
            {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            })
            console.log(response);
        setSuccess(true);
        console.log("success:",success);
        setLoginData({username:"",password:""});
       } catch(err){
        setErrMsg("request failed");
        console.log(err?.response);

       }
        

        

    }
    return ( 
        <>
        {success?<section>
            <Products />
            </section>:<section>
            {errMsg && <p>{errMsg} </p>}
            <form onSubmit={handleSubmit} >
                    <label htmlFor="username">Username:</label>
                    <input 
                    id="username" 
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                    />

                    <label htmlFor="password">password:</label>
                    <input 
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    />
                    <button>login</button>
                </form>
            </section>
            }
        </>
     );
}
 
export default Login;
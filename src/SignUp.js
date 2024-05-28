import { useState } from "react";
import Login from './Login';
import axios from "./api/axios";

const RegisterUrl="/register";

export default function SignUp() {
  const [data, setData] = useState(
    {
      first_name: "",
      last_name:"",
      email: "",
      phone: "",
      password:"",
      username:""
    });
  const [errMsg,setErrMsg]=useState('');
  const [success,setSuccess]=useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // const navigate =useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
     try{
      const response=await axios.post(
        RegisterUrl,
        JSON.stringify(data),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
         });
        setSuccess(true);
        console.log(response?.data)
        setData({
          first_name: "",
          last_name:"",
          email: "",
          phone: "",
          password:"",
          username:""
        });
     }catch(err){
      console.log(err?.response)
      setErrMsg("error while registering")
      console.log(err);
     }
   
  }
  return (
    <>
      {success?<section>
        <Login />
      </section>:<section>
      <p >{errMsg}</p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input 
        type="text" 
        id="firstName" 
        name="first_name"
        value={data.first_name} 
        onChange={handleChange}/>

      <label htmlFor="lastName">Last Name:</label>
      <input 
        type="text" 
        id="lastName" 
        name="last_name" 
        value={data.last_name} 
        onChange={handleChange}/>

      <label htmlFor="phone">Phone:</label>
      <input 
        id="phone" 
        name="phone" 
        value={data.phone} 
        onChange={handleChange}
        />

      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        value={data.email} 
        onChange={handleChange}
        />
      <label htmlFor="username">Username:</label>
      <input 
        type="text" 
        id="username" 
        name="username" 
        value={data.username} 
        onChange={handleChange} 
        />
      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        value={data.password} 
        onChange={handleChange} 
        />
      <button >Submit</button>
       </form>
    </section>
      }
 </>
  );  
}

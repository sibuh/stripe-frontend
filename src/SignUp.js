import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({firstName: "",lastName:"",email: "",phone: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  
  const navigate =useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
       fetch("http://localhost:8080/v1/create",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(formData)
        })
        .then(res => {
            console.log("status code",res.status)
            if (res.ok){
                navigate("/success")
            }
          return  res.json
        })
        .then(data=>{})
        .catch(error=>{
            console.log(error)
            navigate("/err")
        })
    
  
};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}/>

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}/>

      <label htmlFor="phone">Phone:</label>
      <input id="phone" name="phone" value={formData.phone} onChange={handleChange}/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form>
  );
}

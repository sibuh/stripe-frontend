import axios from "./api/axios";



export const refresh = async()=>{
    try{
        const response =await axios.get("/token",
        {
            headers:{
                'Authorization': 'Bearer '+localStorage.getItem('token'),
            }
        });
        if(response.status===200){
           const token =response.headers.get('Authorization');
           console.log(token);
           localStorage.setItem('token',token);
        }else{
            console.log("status:", response.status)    
        }

    }catch(err){
        console.log("error:", err)  
    }
    

}
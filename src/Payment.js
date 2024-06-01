import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import axios  from "./api/axios";

function Payment() {
  const [stripePromise, setStripePromise] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { eventId } = useParams();
  const[errMsg,setErrMsg]=useState('');

  useEffect(() => {
   const getPubKey= async ()=>{
      try{
        const res =await axios.get("http://localhost:8080/v1/pk",
        {headers:{'Authorization':'Bearer '+localStorage.getItem('token')}});
        const {publishableKey}=res.data
        setStripePromise(loadStripe(publishableKey));
      }catch(err){
        setErrMsg('failed to get publishable key');
        console.log('pubkey>>',err)
      }
    }
   getPubKey();
  }, []);

  useEffect(() => {
    const getClientSecret=async()=>{
      try{
        const res=await axios.get('http://localhost:8080/v1/cpi/'+eventId,
        {
          headers:{
            'Authorization':'Bearer '+localStorage.getItem('token')
          }
        });
        console.log("response data",res.data)
        const {clientSecret}=res.data;
        setClientSecret(clientSecret);
      }catch(err){
        setErrMsg('failed to get client secret');
        console.log('secretkey>>',err)

      }
     
    }
    getClientSecret();

  }, [eventId]);


  return (
    <div >
      <h1>React Stripe and the Payment Element</h1>
      {errMsg&&<h1 className="error-msg">{errMsg}</h1>}
      {clientSecret && stripePromise && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret, locale: "en" }}
        >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default Payment;
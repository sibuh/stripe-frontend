import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./api/axios";

const EventComponent = (ev)=> {
  const navigate = useNavigate();
  const handleBuy = (id) => {
    navigate(`/payment/${id}`);
  };

 return  <div className="event">
              <div>
                <h3>{ev.event.title}</h3>
                <h3>{ev.event.description}</h3>
                <h3>
                  <strong>${ev.event.price}</strong>
                </h3>
                <br />
              </div>
              <button className="buy-btn" onClick={() => handleBuy(ev.event.id)}>Buy now</button>
          </div>
}

const Events = () => {
  const [events,setEvents]=useState([]);
  const [errMsg,setErrMsg]=useState('');
   useEffect(()=>{
    async function fetchEvents(){
      try{
        const res =await axios.get("http://localhost:8080/v1/events",{
          headers:{'Authorization':'Bearer '+localStorage.getItem('token')}
        });
        const data=res.data;
      if(data){
        setEvents(data);
      }
      }catch(err){
        setErrMsg('failed to fetch events')
      }
    }
    fetchEvents();
   },[]);



  return (
    <div>
      <h2>Buy Ticket </h2>
      <div className="events">
        {errMsg&&<h1 className="error-msg">Error while fetching events</h1>}
        {events && events.map(event => <EventComponent key ={event.id} event={event} />) } 
      </div>
   </div>
  );
};

export default Events;
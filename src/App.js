import { useState,useEffect } from 'react';
import { GoogleMap, Marker,withGoogleMap ,withScriptjs,GoogleApiWrapper} from "react-google-maps"
import './App.css';

function App() {

const [data,setData] =useState([])
useEffect(()=>{
  const url = "http://localhost:3000/posts";
  fetch(url)
      .then((response) => response.json())
      .then((JsonResponse) => {
        
           
           setData(JsonResponse[0])
         
      })



},[])
 
      console.log(data)     
  return (
    <>
    <div className="rest1">
    <h1 >Name of restaurant with location</h1>
    
    </div>
    <div>
       {
         
         data.map((e,index)=>{
          
        return (   <div key={index} className="rest">
          
            
           <h1 >Restaurant Name: {e.restaurantName}{"  "}{e.last_name}</h1>
           <p>Location: Latitude - {e.address} {" "} {"  "}   longitude  {e.location}</p>
           
           </div>
        )
         })
       }
    </div>
    
    
    );
    
   
    </>
  );
}

export default App;



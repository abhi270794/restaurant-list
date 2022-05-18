import { useState,useEffect } from 'react';
import { GoogleMap, Marker,withGoogleMap ,withScriptjs,GoogleApiWrapper} from "react-google-maps"
import './App.css';
import config from "./MOCK_DATA.json"
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
 
      console.log(config)     
  return (
    <>
    <div class="mapouter">
    <div class="gmap_canvas">
    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
</div>
    <div className="rest1">
    <h1 >Name of restaurant with location</h1>
    
    </div>
    <div>
       {
         
         config.map((e,index)=>{
          
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



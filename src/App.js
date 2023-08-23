 import './App.css';
  import { useMemo, useState, useEffect } from 'react';

//import all functions we needed from librerie @react-google-maps/api
import { GoogleMap, useLoadScript,Marker } from "@react-google-maps/api";

// add librarie
const libreries = ["places"]

 export default function App() {

   //useLoadScript its hook loads an external script tag in the browser.
   const { isLoaded, loadError } = useLoadScript({

    //get key api from file .env
     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
     libreries,
   });
  //add condition if google maps load or not
   if (loadError) return <div>Error loading maps</div>;
   if (!isLoaded) return <div>Loading...</div>;

   return <Map />;
 }

function Map() {
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(()=>{
      //geolocation fetch the user's location.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }, []);
    
//memorize the result
  const center =useMemo(()=>(currentLocation? currentLocation :{lat : 44, lng : -80}) ,[currentLocation]) 
      
  return (
    //add googleMap component and Merker( indicates or marks a curent location(using currentLocation) with desired symbols ) component
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      {currentLocation && <Marker position={currentLocation} />}
    </GoogleMap>
  );
} 

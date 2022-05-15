import React from 'react'
import { useState,useEffect } from 'react'
import ParkingDetail from './ParkingDetail'
import {
    Link,
    useParams
  } from "react-router-dom";

function Detail() {
    let { id } = useParams();
    const [parkings, setParkings] = useState([]);
    useEffect(()=>{
      fetch('https://parking-system-iot.herokuapp.com/detail/' + id,{
        'methods':'GET',
        headers : {
          'Content-Type':'application/json'
        }
      })
      .then(response => response.json())
      .then(response => setParkings(response))
      .catch(error => console.log(error))
  
    },[])


    return (
        <div>
        {/* <Link to="/">
            <h1>Parking System</h1>
        </Link> */}

            <ParkingDetail 
            parkings={parkings} 
            />
        </div>
    );
}

export default Detail;
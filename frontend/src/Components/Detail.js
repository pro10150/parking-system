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
      fetch('http://192.168.1.108:4000/detail/' + id,{
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
        <Link to="/">
            <h3>Parking System</h3>
        </Link>

            <ParkingDetail 
            parkings={parkings} 
            />
        </div>
    );
}

export default Detail;
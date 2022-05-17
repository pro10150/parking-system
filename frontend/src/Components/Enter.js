import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../src/App.css';
import {
    Link,
    Navigate,
    useNavigate,
    useParams
} from "react-router-dom";

import QRCode from "react-qr-code"


function Enter() {
    let { id } = useParams();
    const navigate = useNavigate();



    const handleEnter = (e) => {
        e.preventDefault();
        // navigate('/enter');
        fetch("https://parking-system-iot.herokuapp.com/detail/" + id)
        .then(response => {
            response.json()
            .then(data => {
                console.log(data)
                if(data.entry != null){
                    navigate('/' + id)
                }
            })

        })
        .catch(response => {
            console.log(response)
        })
    }

    return (

        <div className="container-xxl">
            <div className="row">
                <div className="text-center row ">
                    <div className="text-center row gy-5 text-dark">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h1 class="display-1 text-dark font-weight-bold">Carparking Online service</h1>
                        </Link>
                    </div>
                </div>

                <div class='row  gy-5 align-items-center'>
                    <div className='row col-xxl  gy-5 ' >
                        <div class="text-center">

                            <img src={process.env.PUBLIC_URL + "/Piccomp/QR1.png"} class="rounded mx-auto d-block img-fluid" width= "400" />
                        </div>
                    </div>

                    <div className='col-xxl' >
                        <div class="container-fluid ">
                            <div class="text-center">
                                <img src={process.env.PUBLIC_URL + "/Piccomp/car 6.png"} class="rounded mx-auto d-block img-fluid" width="300" />
                                <br /><br />
                                <h1 >Use this QR Code to enter the parking lot</h1>
                                <br />
                            </div>
                            <QRCode class="rounded mx-auto d-block img fluid" value={id} />
                        </div>
                        <br />
                        <form onSubmit={handleEnter}>
                            <button class="btn btn-dark btn-block form-control btn-lg">
                                Done
                            </button>
                        </form>
                      <h3 class="d-flex justify-content-center">OR</h3>
                        <Link to="/">
                            <button class="btn btn-dark btn-block form-control btn-lg">
                                Back to Home Screen
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Enter;
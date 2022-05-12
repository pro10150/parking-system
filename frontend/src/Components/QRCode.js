import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../src/App.css';
import {
    Link,
    useParams
} from "react-router-dom";

import QRCode from "react-qr-code"

function ParkingQRCode() {
    let { id } = useParams();


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

                            <img src={process.env.PUBLIC_URL + "/piccomp/QR1.png"} class="rounded mx-auto d-block img-fluid" width= "400" />
                        </div>
                    </div>

                    <div className='col-xxl' >
                        <div class="container-fluid ">
                            <div class="text-center">
                                <img src={process.env.PUBLIC_URL + "/piccomp/car 6.png"} class="rounded mx-auto d-block img-fluid" width="300" />
                                <br /><br />
                                <h1 >Your QRCode</h1>
                                <br />
                            </div>
                            <QRCode class="rounded mx-auto d-block img fluid" value={id} />
                        </div>
                        <br />
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
export default ParkingQRCode;
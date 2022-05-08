
import {
    Link,
    useParams
} from "react-router-dom";

import QRCode from "react-qr-code"

function ParkingQRCode() {
    let { id } = useParams();


    return (

        <div className="container-xxl">
            <div className="text-center row gy-5">
                <h1 class="display-1">
                    Carparking Online service
                </h1>
            </div>

            <div class='row  gy-5 align-items-center'>
                <div className='row col-xxl  gy-5 ' >
                    <div class="text-center">

                        <img src={process.env.PUBLIC_URL + "/piccomp/park1.png"} class="rounded mx-auto d-block img-fluid" />
                    </div>
                </div>

                <div className='col-xxl' >
                    <div class="container-fluid ">
                        <div class="text-center">
                            <img src={process.env.PUBLIC_URL + "/piccomp/car 6.png"} class="rounded mx-auto d-block img-fluid" width="200" />
                            <br /><br />
                            <h1 >Check the parking detail</h1>
                            <br /><br />
                        </div>
                        <h3>Parking que</h3>
                        <br />
                    </div>
                </div>

            </div>
            <Link to="/">
                <h3>Parking System</h3>
            </Link>
            <QRCode value={id} />
        </div>
    );
}
export default ParkingQRCode;
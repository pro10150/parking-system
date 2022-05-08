import {
    Link,
    useParams
} from "react-router-dom";
const ParkingDetail = (props) => {
    console.log(props.parkings)
    var dateDiff;
    if (props.parkings.status === 1) {
        dateDiff = calDatetimeDiff(new Date(), new Date(props.parkings.entry));
    }
    return (
        <div className="container-xxl ">
            <div className="row">
                <div className="text-center row gy-5 text-dark">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1 class="display-1 text-dark font-weight-bold">Carparking Online service</h1>
                    </Link>
                </div>

                <div class='row  gy-5 align-items-center'>
                    <div className='row col-xxl  gy-5 ' >
                        <div class="text-center">
                            <h1 >Car parking E-ticket </h1>
                            <br /> <br />
                            <img src={process.env.PUBLIC_URL + "/piccomp/park2.png"} class="rounded mx-auto d-block img-fluid" />
                        </div>
                    </div>

                    <div className='col-xxl' >
                        <div class="container-fluid ">
                            <div class="form-floating mb-3">
                                
                                {/* Display the article details if article is not None */}
                                {
                                    props.parkings.status === 1 ? (
                                        <div key={props.parkings.id}>
                                            <div className="text-center">
                                                <h1> ID {props.parkings.id} parking detail</h1>
                                            </div>

                                            <h3>
                                                <div className="row align-items-center" >
                                                    <div className='row col-xxl  gx-5 gy-5' >
                                                        Parked time
                                                    </div>
                                                    <div className='row col-xxl  gx-5 gy-5'>
                                                        : {new Date(props.parkings.entry).toLocaleString()}
                                                    </div>
                                                </div>
                                            </h3>

                                            <h3>
                                                <div className="row align-items-center" >
                                                    <div className='row col-xxl  gx-5 gy-5' >
                                                        Current time
                                                    </div>
                                                    <div className='row col-xxl  gx-5 gy-5'>
                                                        : {new Date().toLocaleString()}
                                                    </div>
                                                </div>
                                            </h3>

                                            <h3>
                                                <div className="row align-items-center" >
                                                    <div className='row col-xxl  gx-5 gy-5' >
                                                        Parking period
                                                    </div>
                                                    <div className='row col-xxl  gx-5 gy-5'>
                                                        : {dateDiff[0]} Days, {dateDiff[1]} : {dateDiff[2]} Hours
                                                    </div>
                                                </div>
                                            </h3>
                                            <br /><br />
                                            {/*  <p> { props.parkings.departure } </p> */}
                                            {
                                                props.parkings.departure === 1 ? (
                                                    <Link to="/">
                                                        <button class="btn btn-dark btn-block form-control btn-lg">
                                                            Back to Home Screen
                                                        </button>
                                                    </Link>
                                                ) : (
                                                    dateDiff[0] > 0 && dateDiff[1] > 4 ? (
                                                        <Link to={"/" + props.parkings.id + "/qr"}>
                                                            <button class="btn btn-success btn-block form-control btn-lg">
                                                                Check out and bill
                                                            </button>
                                                        </Link>

                                                    ) : (
                                                        <Link to={"/" + props.parkings.id + "/qr"}>
                                                            <button class="btn btn-dark btn-block form-control btn-lg">
                                                                Create QR Code
                                                            </button>
                                                        </Link>

                                                    )
                                                )
                                            }
                                        </div>
                                    ) : (
                                        <div class='text-center' >
                                            <h1>Sorry ID not found !</h1>
                                            <br /> <br />
                                            <img src={process.env.PUBLIC_URL + "/piccomp/error2.png"} class="rounded mx-auto d-block img-fluid" />
                                            <Link to="/">
                                                <button class="btn btn-dark btn-block form-control btn-lg">
                                                    Back to Home Screen
                                                </button>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function calDatetimeDiff(current, parked) {
    // get total seconds between the times
    var delta = Math.abs(current - parked) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    return [days, hours, minutes];
}

export default ParkingDetail;
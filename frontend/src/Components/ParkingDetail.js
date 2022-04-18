
import {
    Link,
    useParams
  } from "react-router-dom";
const ParkingDetail = (props) => {
    console.log(props.parkings)
    var dateDiff;
    if(props.parkings.status === 1){
        dateDiff = calDatetimeDiff(new Date(), new Date(props.parkings.entry));
    }
    return (
        <div className="m-2">
        {/* Display the article details if article is not None */} 
        {
          props.parkings.status === 1 ? (
            <div key= {props.parkings.id}>
                <h2 className="text-primary"> { props.parkings.id} </h2>
                <p>Parked time</p>
                <p> {new Date(props.parkings.entry).toLocaleString() } </p>
                <p>Current time</p>
                <p>{new Date().toLocaleString()}</p>
                <p>Parking period</p>
                <p>{ dateDiff[0] } Days {dateDiff[1]} Hours {dateDiff[2]} Minutes</p>
                {/* <p> { props.parkings.departure } </p> */}
                {
                    props.parkings.departure === 1 ? (
                        <Link to="/">
    	                    <button>Back to Home Screen</button>
                        </Link>
                    ) : (
                        dateDiff[0] > 0 && dateDiff[1] > 4 ? (
                            <Link to={"/" + props.parkings.id + "/qr"}>
                                <button>Pay</button>    
                            </Link>
                            
                        ) : (
                            <Link to={"/" + props.parkings.id + "/qr"}>
                                <button>Create QR Code</button>
                            </Link>
                            
                        )
                    )
                }
              </div>
            ) : (
                <div>
                    <h2>ID not found</h2>
                </div>
            )  
        }
              
        </div>
        )
}

function calDatetimeDiff(current, parked){
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

import {
    Link,
    useParams
  } from "react-router-dom";

import QRCode from "react-qr-code"

function ParkingQRCode(){
    let { id } = useParams();


    return (
        <div>
        <Link to="/">
            <h3>Parking System</h3>
        </Link>
        <QRCode value={id} />
        </div>
    );
}
export default ParkingQRCode;
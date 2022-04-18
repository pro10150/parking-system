
const ParkingList = (props) => {

    return (
        <div className="m-2">
        {/* Display the article details if article is not None */} 
   	    {props.parkings && props.parkings.map(parking =>{
            return (

              <div key= {parking.id}>
                <h2 className="text-primary"> { parking.id} </h2>
                <p> { parking.entry } </p>
                <p> { parking.departure } </p>
    	        <hr/>
              </div>
            )
            
            })}
        </div>
        )
}

export default ParkingList;
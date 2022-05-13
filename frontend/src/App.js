import { useState, useEffect } from 'react'
import './App.css';
import ArticleList from './Components/ArticleList'
import ParkingList from './Components/ParkingList'
import Detail from './Components/Detail'
import QRCode from "./Components/QRCode";
import Enter from './Components/Enter'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import ParkingQRCode from './Components/QRCode';

function App() {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [parkings, setParkings] = useState([]);
  const [value, setValue] = useState([]);

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    fetch('http://192.168.1.193:4000/parking', {
      'methods': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => setParkings(response))
      .catch(error => console.log(error))

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/' + value);
    // do what you want with your form data
    // navigate('/2');
  }

  const handleParking = (e) => {
    e.preventDefault();
    // navigate('/enter');
    fetch("http://192.168.1.193:4000/enter")
    .then(response => {
        response.json()
        .then(data => {
          let id = data.id
          navigate('/enter/' + id);
        })
    })
    .catch(response => {
        console.log(response)
    })
  }

  return (

    <Routes>
      <Route path="/" element={
        <div className="container-xxl">
          <div className="row">
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
                  <img src={process.env.PUBLIC_URL + "/piccomp/car 6.png"} class="rounded mx-auto d-block img-fluid" width="300"/>
                    <br /><br />
                    <h1 >Check the parking detail</h1>
                    <br /><br />
                    </div>
                  <h3>Parking ID</h3>
                  <br /> 
                  <div class="form-floating mb-3">
                    <form onSubmit={handleSubmit}>
                      <input type="number" class="form-control" name="name" placeholder='Parking ID' value={value} onChange={e => setValue(e.target.value)} />
                      <br />
                      <button type="submit" class="btn btn-success btn-block form-control btn-lg">
                        Check
                      </button>
                      <h3 class="d-flex justify-content-center">OR</h3>
                    </form>
                    <form onSubmit={handleParking}>
                      <button type="submit" class="btn btn-success btn-block form-control btn-lg">
                        Enter the parking lot
                      </button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ลิสต์ คนที่มาจอด */}
          {/* <ParkingList 
            parkings={parkings} 
            /> */}

        </div>

      } />
      <Route path="/:id" element={<Detail />} />
      <Route path="/:id/qr" element={<ParkingQRCode />} />
      <Route path="/enter/:id" element={<Enter />}/>
    </Routes>

  );
}

export default App;

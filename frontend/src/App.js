import { useState,useEffect } from 'react'
import './App.css';
import ArticleList from './Components/ArticleList'
import ParkingList from './Components/ParkingList'
import Detail from './Components/Detail'
import QRCode from "./Components/QRCode";
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
  useEffect(()=>{
    fetch('http://192.168.1.108:4000/parking',{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setParkings(response))
    .catch(error => console.log(error))

  },[])

  const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/'+value);
      // do what you want with your form data
      // navigate('/2');
  }

  return (

      <Routes>
        <Route path="/" element={
          <div className="App container m-4">
          <div className="row">
            <div className="text-center">
            <h1>ระบบจอดรถ</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                  <input type="number" name="name" value={value} onChange={e => setValue(e.target.value)} />
              </label>
              <input type="submit" value="Submit" />
            </form>

            </div>
          </div>

            <ParkingList 
            parkings={parkings} 
            />

          </div>  

          } />
        <Route path="/:id" element={<Detail />} />
        <Route path="/:id/qr" element={<ParkingQRCode />} />
      </Routes>
    
  );
}

export default App;

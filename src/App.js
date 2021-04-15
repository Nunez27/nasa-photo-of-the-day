import React, {useState, useEffect} from "react";
import "./App.css";
// import {NasaUrl} from './index.js'
import axios from 'axios'
import Image from './Componets/Image'

function App() {
  const [nasaData, setNasaData] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setNasaData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="App">
      <Image photo={nasaData.url} />
    </div>
  );
}


export default App;

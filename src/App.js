import React, {useState, useEffect} from "react";
import "./App.css";
// import {nasaUrl} from './index.js'
import axios from 'axios'
import Image from './Componets/Image'
import Card from "./Componets/Card";

function App() {
  const [nasaData, setNasaData] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setNasaData(res.data)
    })
    .catch(err => {
      return(err)
    })
  }, [])
  return (
    <div className="App">
      <Image photo={nasaData.url} />
      <Card nasaData={nasaData} />
    </div>
  );
}


export default App;

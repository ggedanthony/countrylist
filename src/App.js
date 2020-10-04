import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      setData(res.data.splice(0,10))
    })
    .catch(err => {
      console.log(err)
    })
  },[]);

   console.log(data)


  return (
    <div>
    CountryList App
    </div>
  );
}

export default App;

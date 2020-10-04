import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      setData(res.data.splice(0,10))
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
  },[]);

  const Load = (props, page) => {

    switch(page){
      case "LandingPage": return <LandingPage {...props} data={data}/>
      case "DetailsPage": return <DetailsPage {...props} data={data}/>
      default: return <NotFoundPage/>
    }
  }

  return (
    <div>
      {isLoading ?
          <Container>
            <Row>
              <Col id="loaderContainer">
                <div id="loader">
                  <Loader
                    type ="Puff"
                    color="#00BFFF"
                    height={200}
                    width={200}
                  />
                </div>
              </Col>
            </Row>
          </Container>
            :
          <BrowserRouter>
            <Switch>
              <Route path="/details/:name" render={(props) => Load(props, "DetailsPage")}/>
              <Route path="/" render={(props) => Load(props, "LandingPage")}/>
            </Switch>
          </BrowserRouter>
        }
    </div>

  );
}

export default App;

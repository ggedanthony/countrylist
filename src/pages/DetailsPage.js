import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row, Col} from 'reactstrap';
import {useParams} from 'react-router-dom';
import DetailsTable from '../tables/DetailsTable';



const DetailsPage = (props) => {

	const params = useParams()
	const [country, setCountry] = useState([])

	useEffect(()=>{
		if(params.name){
			axios.get(`https://restcountries.eu/rest/v2/name/${params.name}`)
		.then(res => {
			setCountry(res.data)
		
		})
		.catch(err => {
			console.log(err)
		})

		}
	},[])


  return (
    <Container>
    	<Row>
	    	<Col>
				<div>
				<DetailsTable data={country}/>
				</div>	
	    	</Col>
    	</Row>
    </Container>
  );
}

export default DetailsPage;
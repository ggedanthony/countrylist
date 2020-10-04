import React from 'react';
import { Container, Row} from 'reactstrap';
import CountryTable from '../tables/CountryTable';
import './style.css';


const LandingPage = (props) => {

  return (
    <Container>
    	<Row>
			<CountryTable data={props.data}/>
    	</Row>
    </Container>
  );
}

export default LandingPage;
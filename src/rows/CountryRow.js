import React, {Fragment} from 'react';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

const CountryRow = (props) => {

// console.log("row", props)
	return(
		<Fragment >
		<Col sm="3" id="item">
			<Row>
				<Col className="p-0 m-0">
					<div>
					 {props.data.alpha3Code}				
					</div>
					<div>
					 {props.data.name}				
					</div>
					<div>
					 {props.data.timezones.splice(0,1)}				
					</div>
					<div>
					 {props.data.callingCodes}				
					</div>
				</Col>
				<Col>
					<img src="https://via.placeholder.com/100" alt="n/a"/>
				</Col>
				<Col className="p-0 m-0">
					<Link to={`/details/${props.data.name}`}>Details</Link>
				</Col>
			</Row>
		</Col>
		</Fragment>
	)
}


export default CountryRow;
import React, {Fragment} from 'react';
// import { Row, Col } from 'reactstrap';


const DetailsRow = (props) => {

	console.log(props.data.name)

	return(
		<Fragment>
		specific country
		{props.data.name}
		</Fragment>
	)
}


export default DetailsRow;
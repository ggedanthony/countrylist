import React, {Fragment} from 'react';
import CountryRow from '../rows/CountryRow';

const CountryTable = (props) => {

	let row;
		if(!props.data){
			row = (
				<h1> No items Available!</h1>
			)
		}else{
			let i = 0;
			row = (
				props.data.map(data => {
					return <CountryRow data={data} key={data._id} index={++i}/>
				})
			)
		}

return(
	<Fragment>
			{row}
	</Fragment>
	);

}

export default CountryTable;
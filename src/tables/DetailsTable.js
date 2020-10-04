import React, {Fragment} from 'react';
import DetailsRow from '../rows/DetailsRow';

const DetailTable = (props) => {

// console.log(props.data)

	let row;
		if(!props.data){
			row = (
				<h1> No items Available!</h1>
			)
		}else{
			let i = 0;
			row = (
				props.data.map(data => {
					return <DetailsRow data={data} key={data._id} index={++i}/>
				})
			)}


return(
	<Fragment>
	{row}
	</Fragment>
	);

}

export default DetailTable;
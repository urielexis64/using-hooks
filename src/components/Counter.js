import React, {useState, Fragment} from 'react';

const Counter = () => {
	const [number, setNumber] = useState(0);

	const increase = () => {
		setNumber(number + 1);
	};

	return (
		<Fragment>
			<h3>Number: {number}</h3>
			<button onClick={increase}>Increase</button>
		</Fragment>
	);
};

export default Counter;

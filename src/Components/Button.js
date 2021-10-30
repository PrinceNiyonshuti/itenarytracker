/** @format */

import React from "react";
const Button = (props) => {
	return (
		<div>
			<button className="bg-blue-700 px-4 py-1 text-white rounded">
				{props.name}
			</button>
		</div>
	);
};
export default Button;

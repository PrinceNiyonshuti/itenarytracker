/** @format */

import React from "react";
import Button from "../Components/Button";
const Title = () => {
	return (
		<div>
			<div className="flex justify-between w-full flex-wrap overflow-hidden">
				<div className="w-1/2 overflow-hidden">
					<h2 className="font-bold text-3xl mb-2">Itenary Tracker</h2>
				</div>
				<div className="w-1/2 flex justify-end overflow-hidden">
					<Button name="Add" />
				</div>
			</div>
		</div>
	);
};
export default Title;

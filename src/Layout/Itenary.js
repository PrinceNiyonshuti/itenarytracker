/** @format */

import React from "react";
import { useParams } from "react-router-dom";

function Itenary() {
	const { id } = useParams();
	return (
		<div>
			<h3 className="font-bold text-lg mb-1 mx-5">Itenary Details</h3>
			{id}
		</div>
	);
}

export default Itenary;

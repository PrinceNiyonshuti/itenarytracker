/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Itenaries(props) {
	const { id, title, day, time } = props.itenary;
	return (
		<div>
			<li className="flex justify-between items-center bg-gray-200 mt-2 p-2 cursor-pointer transition">
				<div className="flex ml-2">
					<div className="flex flex-col ml-2">
						<Link to={`/itenary/${id}`}>
							<h1 className="font-bold text-xl">{title}</h1>
						</Link>
						<p className="font-normal">{day} at {time}</p>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<button className="text-red-600 font-bold mr-2">X</button>
				</div>
			</li>
		</div>
	);
}

export default Itenaries;

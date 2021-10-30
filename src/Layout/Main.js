/** @format */

import React, { useState } from "react";
import Itenaries from "../Components/Itenaries";
function Main() {
	const itenaryList = [
		{
			id: 1,
			title: "Read React Documentation",
			day: "Sunday",
			time: "10Am",
			description:
				"Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.",
		},
	];

	const [itenaryData, setItenaryData] = useState(itenaryList);
	return (
		<div>
			<div className="w-full p-4">
				<ul>
					{itenaryData.map((itenary) => (
						<Itenaries key={itenary.id} itenary={itenary} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default Main;

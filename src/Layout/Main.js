/** @format */

import React, { useState } from "react";
import Itenaries from "../Components/Itenaries";

const Main = () => {
	const itenaryList = [
		{
			id: 1,
			title: "Read React Documentation",
			day: "Sunday",
			time: "10Am",
			description:
				"Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.",
		},
		{
			id: 2,
			title: "Do Laundry",
			day: "Sunday",
			time: "8Am",
			description:
				"Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.",
		},
	];

	const [itenaryData, setItenaryData] = useState(itenaryList);

	// Remove Itenary
	const deleteItenary = (ItenaryId) => {
		const filteredItenaries = itenaryData.filter(
			(itenary) => itenary.id !== ItenaryId
		);
		setItenaryData(filteredItenaries);
	};
	return (
		<div>
			<div className="w-full p-4">
				<ul>
					{itenaryData.map((itenary) => (
						<Itenaries
							key={itenary.id}
							itenary={itenary}
							deleteItenary={deleteItenary}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Main;

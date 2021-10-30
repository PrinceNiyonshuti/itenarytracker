/** @format */

import React from "react";

function Itenaries() {
	return (
		<div>
			<li className="flex justify-between items-center bg-gray-200 mt-2 p-2 cursor-pointer transition">
				<div className="flex ml-2">
					<div className="flex flex-col ml-2">
						<h1 className="font-bold text-xl">Read React Documentation</h1>
						<p className="font-normal">
							Sun at 10AM
						</p>
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

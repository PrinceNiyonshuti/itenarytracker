/** @format */

import React from "react";
import { Link } from "react-router-dom";

function AddItenary() {
	return (
		<div>
			<Link to="/">
				<p className="text-blue-700 font-normal mb-1">Go Back</p>
			</Link>
			<h3 className="font-bold text-lg mb-1 mx-5">New Itenary</h3>
			<form>
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<div className=" p-3 w-full">
							<input
								type="text"
								required
								id="name"
								className="border p-2 rounded w-full"
								placeholder="Itenary Name"
							/>
						</div>
						<div className=" p-3 w-full">
							<textarea
								rows="3"
								id="name"
								className="border p-2 rounded w-full"
								placeholder="Write something..."
							/>
						</div>

						<div className="flex justify-between mx-3">
							<div>
								<button className="px-4 py-1 bg-blue-800 text-white rounded font-light hover:bg-blue-700">
									Post Comment
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default AddItenary;

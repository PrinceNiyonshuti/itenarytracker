/** @format */

import React, { useRef } from "react";

const AddItenary = () => {
	// Form variables
	const itenaryTitle = useRef();
	const itenaryDate = useRef();
	const itenaryTime = useRef();
	const itenaryDescription = useRef();
	const itenaryForm = useRef();

	const newItenary = (event) => {
		event.preventDefault();
		const title = itenaryTitle.current.value;
		const date = itenaryDate.current.value;
		const time = itenaryTime.current.value;
		const description = itenaryDescription.current.value;

		console.log(`Data are ${title} ${date} ${time} ${description}`);
	};
	return (
		<div>
			<h3 className="font-bold text-lg mb-1 mx-5">New Itenary</h3>
			<form onSubmit={newItenary} ref={itenaryForm}>
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<div className=" p-3 w-full">
							<input
								type="text"
								id="title"
								ref={itenaryTitle}
								className="border p-2 rounded w-full"
								placeholder="Itenary Title"
							/>
						</div>
						<div className=" p-3 w-full">
							<input
								type="date"
								id="date"
								ref={itenaryDate}
								className="border p-2 rounded w-full"
								placeholder="Itenary Date"
							/>
						</div>
						<div className=" p-3 w-full">
							<input
								type="time"
								id="time"
								ref={itenaryTime}
								className="border p-2 rounded w-full"
								placeholder="Itenary Time"
							/>
						</div>
						<div className=" p-3 w-full">
							<textarea
								rows="3"
								id="description"
								ref={itenaryDescription}
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
};

export default AddItenary;

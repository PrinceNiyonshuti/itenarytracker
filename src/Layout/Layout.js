/** @format */

import React from "react";

import Title from "./Title";
import Main from "./Main";
const Layout = () => {
	return (
		<div className="">
			<div className="flex items-center justify-center w-screen mt-10 ">
				<div className="w-2/4 font-bold border shadow-lg p-4">
					<Title />
					<Main/>
				</div>
			</div>
		</div>
	);
};
export default Layout;

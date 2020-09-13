import React, { useState, useContext}from "react";
import { Context } from "../store/appContext";
export const Logger = () => {
    const{actions, store} = useContext (Context);
	return (
		<div className="row d-flex justify-content-center">
			<form className="col-10 col-lg-4 d-flex flex-column border rounded logger" action="" method="post">
				<div className="row title d-flex justify-content-center py-3">
					<h3>
						<strong>Sign In</strong>
					</h3>
				</div>

				<div className="row d-flex justify-content-between mx-1">
					<label className="">Username:</label>

					<a href="" className="">
						Not registereged yet?
					</a>
				</div>

				<div className="row mx-1">
					<input type="text" className="form-control" />
				</div>

				<div className="row mx-1 pt-3">
					<label>Password:</label>
				</div>

				<div className="row mx-1">
					<input type="text" className="form-control" />
				</div>

				<div className="row mx-1 pt-3">
					<div>
						<input type="checkbox" />
						<label className="ml-2">Remember:</label>
					</div>
				</div>

				<div className="row mx-1 pb-3">
					<button className=" btn btn-block mt-2 mb-4 py-0 ">SIGN IN</button>
				</div>
			</form>
		</div>
	);
};

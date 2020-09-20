import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
export const Logger = () => {
	const { actions } = useContext(Context);
	const [inputFields, setInputFields] = useState({ username: "", password: "" });

	let validation = input => {
		console.log(input.username);
		console.log(input.password, ".password");
		const regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
		const checkCharacter = /[&\/\\#,+()$~%.'":*?<>{}]/g;
		//actions.logginUser(inputFields.username, inputFields.password);

		/* if (inputusername < 6) {
			console.log(input.username, "aqui llegó?");
			setInputFields((input.username = "Error")); */

		/* 	if (
			passwordUser < 6 ||
			!regex.test(passwordUser) ||
			!checkCharacter.test(passwordUser) ||
			passwordUser == "" ||
			passwordUser.indexOf(" ") > 0
		) {
			setInputFields(inputFields => {
				console.log(inputFields, "jgflS");
				return { ...inputFields, passwordUser: "Error" };
			});
		} */
	};

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
					<input
						type="text"
						className={
							inputFields.username == "Error" ? "form-control border border-danger" : "form-control"
						}
						onChange={e => {
							let val = e.target.value;
							setInputFields(inputFields => {
								return { ...inputFields, username: val };
							});
						}}
					/>
				</div>

				<div className="row mx-1 pt-3">
					<label>Password:</label>
				</div>

				<div className="row mx-1">
					<input
						type="text"
						className={
							inputFields.passwordUser == "Error" ? "form-control border border-danger" : "form-control"
						}
						onChange={e => {
							let val = e.target.value;
							setInputFields(inputFields => {
								return { ...inputFields, password: val };
							});
						}}
					/>
				</div>

				<div className="row mx-1 pt-3">
					<div>
						<input type="checkbox" />
						<label className="ml-2">Remember:</label>
					</div>
				</div>

				<div className="row mx-1 pb-3">
					<button
						className=" btn btn-block mt-2 mb-2 py-0 button-User"
						onClick={e => {
							e.preventDefault();
							validation(inputFields.username);
						}}>
						SIGN IN
					</button>
				</div>

				<div className="row mx-1 pb-3">
					<button className=" btn btn-block mt-2 mb-4 py-0 button-Google">Sign in with Google</button>
				</div>
			</form>
		</div>
	);
};
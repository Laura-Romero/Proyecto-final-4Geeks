import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
export const Logger = () => {
	const { actions, store } = useContext(Context);
	const query_string = new URLSearchParams(window.location.search);
	const token = query_string.get("token");

	if (token) {
		actions.redirectLogin(token);
		return <Redirect to="/" />;
	}

	const [inputFields, setInputFields] = useState({ username: "", password: "" });

	let validation = input => {
		const regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
		const checkCharacter = /[&\/\\#,+()$~%.'":*?<>{}]/g;

		if (input.username.length < 6) {
			setInputFields({ ...inputFields, username: "Error" });
		}
		const passwordUser = input.password;
		if (
			passwordUser < 6 ||
			!regex.test(passwordUser) ||
			!checkCharacter.test(passwordUser) ||
			passwordUser == "" ||
			passwordUser.indexOf(" ") > 0
		) {
			setInputFields(inputFields => {
				return { ...inputFields, password: "Error" };
			});
		}
		if (inputFields.username != "Error" && inputFields.password != "Error") {
			actions.postLogin(inputFields.username, inputFields.password);
		} else {
			alert("datos erroneos");
		}
	};

	if (store.user && store.tokenLogin) {
		return <Redirect to="/userInterface" />;
	} else {
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
						<Link to="/registration">
							<a className="">Not registered yet?</a>
						</Link>
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
							type="password"
							className={
								inputFields.password == "Error" ? "form-control border border-danger" : "form-control"
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
								validation(inputFields);
							}}>
							<span className="sing-In">Sign In</span>
						</button>
					</div>

					<div className="row mx-1 pb-3">
						<a
							href="https://3000-a646f059-ee41-457c-be7c-66697288378c.ws-eu01.gitpod.io/login"
							className=" btn btn-block mt-2 mb-4 py-0 button-Google d-flex justify-content-around">
							<span className="sing-In">Sign in with Google</span>
						</a>
					</div>
				</form>
			</div>
		);
	}
};

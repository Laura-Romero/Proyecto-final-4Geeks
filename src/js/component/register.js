import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
export const Register = () => {
	const { actions } = useContext(Context);

	const [inputFullName, setFullName] = useState("");
	const [inputUsername, setUserName] = useState("");
	const [inputPassw, setPassw] = useState("");
	const [inputMail, setMail] = useState("");
	const [inputCountry, setCountry] = useState("");
	const [inputCity, setCity] = useState("");

	let validation = (username, email, fullName, country, city, password) => {
		const checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const checkCharacter = /[&\/\\#,+()$~%.'":*?<>{}]/g;
		const regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

		if (!checkEmail.test(email)) {
			console.log(checkEmail.test(email));
			setMail("Error");
		} else {
			console.log(checkEmail.test(email), "diferent");
		}

		if (username.length < 5) {
			setUserName("Error");
		}

		if (
			password.length < 6 ||
			!regex.test(password) ||
			!checkCharacter.test(password) ||
			password == "" ||
			password.indexOf(" ") > 0
		) {
			console.log(regex.test(password), "password");
			setPassw("Error");
		}
		if (checkCharacter.test(fullName) || fullName == "") {
			setFullName("Error");
		}

		if (checkCharacter.test(country) || country == "") {
			setCountry("Error");
		}

		if (checkCharacter.test(city) || city == "") {
			setCity("Error");
		}
		if (
			username != "Error" &&
			password != "Error" &&
			email != "Error" &&
			fullName != "Error" &&
			city != "Error" &&
			country != "Error"
		) {
			actions.addUser(inputFullName, inputUsername, inputPassw, inputMail, inputCountry, inputCity);
		} else {
			alert("revisar datos");
		}
	};

	return (
		<div className="row d-flex justify-content-center">
			<form className="register col-10 col-lg-4 d-flex flex-column" action="" method="post">
				<div className="row title d-flex justify-content-center py-3">
					<h3>
						<strong>Registration</strong>
					</h3>
				</div>

				<div className="row mx-1">
					<label>Full name:</label>
				</div>
				<div className="row mx-1">
					<input
						type="text"
						onChange={e => setFullName(e.target.value)}
						className={inputFullName == "Error" ? "form-control border border-danger" : "form-control"}
					/>
				</div>

				<div className="row mx-1 pt-3">
					<label>Username:</label>
				</div>
				<div className="row mx-1">
					<input
						type="text"
						onChange={e => setUserName(e.target.value)}
						className={inputUsername == "Error" ? "form-control border border-danger" : "form-control"}
					/>

					{/* <div className="invalid-feedback">More of 5 Characters</div> */}
				</div>

				<div className="row mx-1 pt-3">
					<label>Password:</label>
				</div>
				<div className="row mx-1">
					<input
						type="password"
						onChange={e => setPassw(e.target.value)}
						className={inputPassw == "Error" ? "form-control border border-danger" : "form-control"}
					/>
				</div>

				<div className="row mx-1 pt-3">
					<label>Email addres:</label>
				</div>
				<div className="row mx-1">
					<input
						type="text"
						onChange={e => setMail(e.target.value)}
						className={inputMail == "Error" ? "form-control border border-danger" : "form-control"}
					/>
				</div>

				<div className="row d-flex justify-content-between pt-3">
					<div className="col ml-2">
						<label>Country:</label>
					</div>
					<div className="col">
						<label>City:</label>
					</div>
				</div>
				<div className="row d-flex justify-content-between">
					<div className="col ml-1">
						<input
							type="text"
							onChange={e => setCountry(e.target.value)}
							className={inputCountry == "Error" ? "form-control border border-danger" : "form-control"}
						/>
					</div>
					<div className="col mr-1">
						<input
							type="text"
							onChange={e => setCity(e.target.value)}
							className={inputCity == "Error" ? "form-control border border-danger" : "form-control"}
						/>
					</div>
				</div>

				<div className="row mx-1 pb-4">
					<button
						className="btn btn-block mt-3"
						onClick={e => {
							e.preventDefault();
							validation(inputUsername, inputMail, inputFullName, inputCountry, inputCity, inputPassw);
						}}>
						SUBMIT
					</button>
				</div>
			</form>
		</div>
	);
};

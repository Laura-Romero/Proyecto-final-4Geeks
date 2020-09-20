import { Link } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			arrayNewUser: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			addUser: (inputFullName, inputUsername, inputPassw, inputMail, inputCountry, inputCity) => {
				if (
					(inputFullName,
					inputUsername,
					inputPassw,
					inputMail,
					inputCountry,
					inputCity != "Error" || inputFullName,
					inputUsername,
					inputPassw,
					inputMail,
					inputCountry,
					inputCity != "")
				) {
					console.log(inputFullName, inputUsername, inputPassw, inputMail, inputCountry, inputCity, "FEF");
					fetch("https://3000-a646f059-ee41-457c-be7c-66697288378c.ws-eu01.gitpod.io/user", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							fullname: inputFullName,
							username: inputUsername,
							password: inputPassw,
							email: inputMail,
							country: inputCountry,
							city: inputCity,
							is_active: true
						})
					})
						.then(function(response) {
							if (response.StatusCode == "200") {
								LinktTo = "/logger";
							} else {
								alert("revise los datos");
							}
							return response.json();
						})
						.then(function(responseAsJson) {
							//aqui validar que la respuesta sea correcta (si da un 200) para yo redirigir o lanzar un mensaje
							console.log(responseAsJson);
						}); /* .catch(throw) */
				} else {
					alert("comprueba los datos");
				}
			}

			// Use getActions to call a function within a fuction
		}
	};
};

export default getState;

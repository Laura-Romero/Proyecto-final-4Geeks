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

			logginUser: (inputUsername, inputPassword) => {
				console.log(inputPassword, inputUsername);
				fetch("https://3000-db796cb0-c9f4-4b21-ab2e-802de7aee960.ws-eu01.gitpod.io/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: inputUsername,
						password: inputPassword
					})
				})
					.then(function(response) {
						// si la respusta es un 200, ......?
						return response.json();
					})
					.then(function(responseAsJson) {
						//guardar usuario en el store
						console.log(responseAsJson);
					}); //catch(throw)
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
=======
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
					fetch("https://3000-db796cb0-c9f4-4b21-ab2e-802de7aee960.ws-eu01.gitpod.io/user", {
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

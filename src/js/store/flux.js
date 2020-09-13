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
				fetch("https://3000-b7899868-7c51-4238-bf71-3b89fc0786f9.ws-eu01.gitpod.io/users", {
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
						console.log(responseAsJson);
					});
			}

			// Use getActions to call a function within a fuction
		}
	};
};

export default getState;

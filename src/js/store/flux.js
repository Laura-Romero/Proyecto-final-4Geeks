import { Link } from "react-router-dom";
import React from "react";
import { Redirect } from "react-router-dom";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			arrayNewUser: [],

			widgetInfo: [
				{
					title: "Twitter",
					class: "widget-icon fa fa-twitter"
				},
				{
					title: "Gmail",
					class: "widget-icon fa fa-google"
				},
				{
					title: "Weather",
					class: "widget-icon fa fa-cloud"
				},
				{
					title: "Clock",
					class: "widget-icon fa fa-clock-o"
				},
				{
					title: "Compliments",
					class: "widget-icon fa fa-heart"
				},
				{
					title: "To do list",
					class: "widget-icon fa fa-tasks"
				}
			]
		},
		actions: {
			postLogin: async (inputUsername, inputPassword) => {
				let userToken = await fetch(
					"https://3000-a646f059-ee41-457c-be7c-66697288378c.ws-eu01.gitpod.io/login",

					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							username: inputUsername,
							password: inputPassword
						})
					}
				);
				userToken = await userToken.json();

				setStore({ tokenLogin: userToken.token });
				let user = await fetch("https://3000-a646f059-ee41-457c-be7c-66697288378c.ws-eu01.gitpod.io/user", {
					headers: { "Content-Type": "application/json", "X-Access-Point": userToken.token }
				});

				user = await user.json();
				setStore({ user: user });
			},
			loginOautUser: (inputUsername, inputPassword) => {
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
							console.log(response.json());
							if (response.status == 200) {
								<Link to="/" />;
							} else {
								alert("revise los datos");
							}
							return response;
						})
						.then(function(responseAsJson) {
							console.log(responseAsJson);
						})
						.catch(function(error) {
							console.log(error);
						});
				} else {
					alert("comprueba los datos");
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getTweets: async () => {
				let response = await fetch(
					`https://3000-ca788549-3ff8-4b13-84a1-3f5ffcf84ebf.ws-eu01.gitpod.io/twitter`
				);
				let data = await response.json();
				console.log(data);
				setStore({ tweets: data });
			}

			// Use getActions to call a function within a fuction
		}
	};
};

export default getState;

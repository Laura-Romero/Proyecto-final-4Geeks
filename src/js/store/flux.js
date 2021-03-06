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
			],
			widgetMirror: []
		},
		actions: {
			loadWeather: city => {
				const weatherURL = `https://api.openweathermap.org/data/2.5/find?q=madrid,ES&appid=4cd5539f8e0617ff4cc0a570dd24742a&lang=es&units=metric&cnt=16`;
				fetch(weatherURL)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						const dailyData = data.list[0];

						setStore({
							day: dailyData
						});
					});
			},
			postLogin: async (inputUsername, inputPassword) => {
				let userToken = await fetch(
					"https://mirrorify.herokuapp.com/login",

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
				let user = await fetch("https://mirrorify.herokuapp.com/user", {
					headers: { "Content-Type": "application/json", "X-Access-Point": userToken.token }
				});

				user = await user.json();
				setStore({ user: user });
			},
			loginOautUser: async () => {
				let response = await fetch("https://mirrorify.herokuapp.com/login");
				response = await userOaut.json();
				console.log(response);
			},
			addUser: async (inputFullName, inputUsername, inputPassw, inputMail, inputCountry, inputCity) => {
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
					let register = await fetch("https://mirrorify.herokuapp.com/user", {
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
					});
					register = await register.json();
					setStore({ register: register });
				} else {
					alert("comprueba los datos");
				}
			},

			getTweets: async () => {
				let response = await fetch("https://mirrorify.herokuapp.com/twitter");
				let data = await response.json();
				setStore({ tweets: data });
			},

			setWidgetArray: async widgetArrayItems => {
				let widgetArray = [];
				for (let item in widgetArrayItems) {
					widgetArray.push(widgetArrayItems[item]["name"]);
				}
				setStore({ widgetMirror: widgetArray });
			}

			// Use getActions to call a function within a fuction
		}
	};
};

export default getState;

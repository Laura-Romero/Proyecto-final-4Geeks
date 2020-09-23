import React, { useContext } from "react";
import "../../styles/weatherWidget.scss";
import { Context } from "../store/appContext";

export const Weather = () => {
	const { store } = useContext(Context);
	let todayIcon = store.day ? store.day["weather"][0]["icon"] : "";
	let todayTemp = store.day ? store.day["main"]["temp"] : "";
	let city = store.day ? store.day["name"] : "";
	let country = store.day ? store.day["sys"]["country"] : "";
	let description = store.day ? store.day["weather"][0]["description"] : "";
	description = description.charAt(0).toUpperCase() + description.slice(1);
	const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${todayIcon}.svg`;

	return (
		<div className="cardWeather">
			<div className="row text-center">
				<h2>{city + ", " + country}</h2>
			</div>
			<div className="row">
				<div className="col-6">
					<img className="city-icon" src={icon} alt={todayIcon} />
					<h2>
						{Math.round(todayTemp)}
						<sup>°C</sup>
					</h2>
					<h4>{description}</h4>
				</div>
				<div className="col-6 d-flex flex-column">
					<small>
						{store.day
							? "Sensacion termica: " + Math.round(store.day["main"]["feels_like"]) + "°C"
							: "Sensacion termica:"}
					</small>
					<small>{store.day ? "Humedad: " + store.day["main"]["humidity"] + "%" : "Humedad:"}</small>
					<small>{store.day ? "MIN: " + Math.round(store.day["main"]["temp_min"]) + "°C" : "MIN:"}</small>
					<small>{store.day ? "MAX: " + Math.round(store.day["main"]["temp_max"]) + "°C" : "MAX:"}</small>
				</div>
			</div>
		</div>
	);
};

import React from "react";
import { ApiConfig } from "./apiKey";

export const WeekContainer = () => {
	const weatherURL =
		"http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=" + ApiConfig.owmKey;

	return (
		<div>
			<h1>Hello World!</h1>
		</div>
	);
};

import React, { Fragment, useState, useEffect } from "react";
import "../../styles/clock.scss";

export const Clock = () => {
	const [date, setDate] = React.useState(new Date());

	//Replaces componentDidMount and componentWillUnmount
	React.useEffect(() => {
		var timerID = setInterval(() => tick(), 1000);
		return function cleanup() {
			clearInterval(timerID);
		};
	});

	function tick() {
		setDate(new Date());
	}
	return (
		<Fragment>
			<h1 className="clock"> {date.toLocaleTimeString()} </h1>
		</Fragment>
	);
};

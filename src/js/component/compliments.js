import React, { Fragment, useState, useEffect, useContext } from "react";
import "../../styles/compliments.scss";
import { Context } from "../store/appContext";
import { Widget } from "./widget";

export const Compliments = () => {
	const complimentList = [
		"OMG!! You look AWESOME today 🤯",
		"Remember how much you worth",
		"You have the most beautiful eyes!",
		"Today is gonna be great!",
		"You are amazing!🤩",
		"You're a smart cookie🍪",
		"You should be proud of yourself🥇",
		" You Might Be The Primary Reason For Global Warming.🥵",
		"You Know What’s Awesome? Chocolate Cake, Oh And Your Face.🤗",
		"You Could Never Be Ice Cream. Because You’re So Hot. And A Person.🍦",
		"You’re So Cute, I Want To Throw A Rainbow.🌈",
		"On a scale from 1 to 10, you're an 11.",
		"You're really something special.",
		"You're someone's reason to smile.😄",
		"The Only Thing Better Than Being Friends With You Is Being Friends With A Talking Dolphin.🐬",
		"You're more fun than bubble wrap."
	];
	const [compliment, setCompliment] = useState(Math.floor(Math.random() * 16));

	useEffect(() => {
		const compInterval = setInterval(() => {
			setCompliment(Math.floor(Math.random() * 16));
		}, 60000);
		return () => clearInterval(compInterval);
	}, []);
	console.log(compliment);
	return (
		<Fragment>
			<div className="compliment-box">
				<p className="compliment-list">{complimentList[compliment]}</p>
			</div>
		</Fragment>
	);
};

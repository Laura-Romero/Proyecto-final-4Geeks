import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/mirrorScreen.scss";
import { TwitterWidget } from "./twitterwidget";
import { Clock } from "./clock";
import { Compliments } from "./compliments";
import Tw from "../../img/Tw.png";

export const MirrorScreenLayout = () => {
	const { store } = useContext(Context);
	const [class1, setClass1] = useState("box");

	const imgToRender = () => {
		for (let i = 0; i <= store.widgetMirror.length; i++) {
			if (store.widgetMirror[i] == "Twitter") {
				return <img className="img-example" src={Tw} />;
			} else if (store.widgetMirror[i] == "Weather") {
				setClass1("box-weather");
				Twitter;
			}
		}
	};
	return (
		<Fragment>
			<div className="screenExample">
				<div className="box">{store.widgetMirror[0] || ""}</div>
				<div className="box " />
				<div className="box " />
				<div className="box ">{store.widgetMirror[1] || ""}</div>
				<div className="box " />
				<div className="box " />
				<div className="box ">{store.widgetMirror[2] || ""}</div>
				<div className="box " />
				<div className="box " />
			</div>
		</Fragment>
	);
};

// {store.widgetMirror[2] || ""}

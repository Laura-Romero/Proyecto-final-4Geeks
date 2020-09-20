import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/mirrorScreen.scss";
import { TwitterWidget } from "../component/twitterwidget";
import { Clock } from "../component/clock";
import { Compliments } from "../component/compliments";

export const MirrorScreen = () => {
	return (
		<Fragment>
			<div className="screen">
				<div className="top-horizontal-box ">
					<TwitterWidget />
				</div>
				<div className="clock-box ">
					<Clock />
				</div>
				<div className="top-horizontal-box " />
				<div className="vertical-box " />
				<div className="main-vertical-box " />
				<div className="vertical-box " />
				<div className="horizontal-box " />
				<div className="horizontal-box ">
					<Compliments />
				</div>
				<div className="horizontal-box " />
			</div>
		</Fragment>
	);
};

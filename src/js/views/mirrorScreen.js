import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/mirrorScreen.scss";
import { TwitterWidget } from "../component/twitterwidget";
import { Clock } from "../component/clock";
import { Compliments } from "../component/compliments";

export const MirrorScreen = () => {
	const { store } = useContext(Context);

	return (
		<Fragment>
			<div className="screen">
				<div className="box ">
					<TwitterWidget />
				</div>
				<div className="box " />
				<div className="box " />
				<div className="box ">
					<Clock />
				</div>
				<div className="box " />
				<div className="box " />
				<div className="box ">
					<Compliments />
				</div>
				<div className="box " />
				<div className="box " />
			</div>
		</Fragment>
	);
};

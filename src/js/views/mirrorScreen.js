import React, { Fragment, useContext } from "react";

import "../../styles/mirrorScreen.scss";
import { TwitterWidget } from "../component/twitterwidget";
import { Clock } from "../component/clock";
import { Compliments } from "../component/compliments";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const MirrorScreen = () => {
	const { store } = useContext(Context);
	if (store.user && store.tokenLogin) {
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
	} else {
		return <Redirect to="/" />;
	}
};

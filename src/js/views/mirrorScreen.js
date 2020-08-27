import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/mirrorScreen.scss";

export const MirrorScreen = () => {
	return (
		<Fragment>
			<div className="screen">
				<div className="horizontal-box " />
				<div className="horizontal-box " />
				<div className="horizontal-box " />
				<div className="vertical-box " />
				<div className="main-vertical-box " />
				<div className="vertical-box " />
				<div className="horizontal-box " />
				<div className="horizontal-box " />
				<div className="horizontal-box " />
			</div>
		</Fragment>
	);
};

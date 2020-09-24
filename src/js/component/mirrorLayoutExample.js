import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/mirrorScreen.scss";
import { TwitterWidget } from "./twitterwidget";
import { Clock } from "./clock";
import { Compliments } from "./compliments";

export const MirrorScreenLayout = () => {
	const { store } = useContext(Context);

	return (
		<Fragment>
			<div className="screenExample">
				<div className="box ">{store.widgetMirror[0] || ""}</div>
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

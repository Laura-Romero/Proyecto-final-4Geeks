import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/userInterface.scss";
import { WidgetTitle } from "./widgetTitle";
import { Widget } from "./widget";

export const WidgetTable = () => {
	const { store } = useContext(Context);
	return (
		<Fragment>
			<div className="widget-table floating-table-effect col-10 offset-1 col-md-4 offset-md-0">
				<WidgetTitle />
				{store.widgetInfo.map((item, index) => {
					return <Widget key={index} widgetName={item.title} widgetClassName={item.class} />;
				})}
				{/* <Widget widgetClassName="widget-icon fa fa-twitter" widgetName="Twitter" /> */}
			</div>
		</Fragment>
	);
};

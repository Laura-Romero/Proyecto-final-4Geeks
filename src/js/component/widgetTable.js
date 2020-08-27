import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/userInterface.scss";
import { WidgetTitle } from "./widgetTitle";
import { Widget } from "./widget";

export const WidgetTable = props => {
	return (
		<Fragment>
			<div className="widget-table floating-table-effect col-10 offset-1 col-lg-4 offset-lg-0">
				<WidgetTitle />
				<Widget widgetClassName="widget-icon fa fa-twitter" widgetName="Twitter" />
				<Widget widgetClassName="widget-icon fa fa-google" widgetName="Gmail" />
				<Widget widgetClassName="widget-icon fa fa-cloud" widgetName="Weather" />
				<Widget widgetClassName="widget-icon fa fa-clock-o" widgetName="Clock" />
				<Widget widgetClassName="widget-icon fa fa-heart" widgetName="Compliments" />
				<Widget widgetClassName="widget-icon fa fa-tasks" widgetName="To do list" />
			</div>
		</Fragment>
	);
};

WidgetTable.propTypes = {};

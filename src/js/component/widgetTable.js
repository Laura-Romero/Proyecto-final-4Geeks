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
			<div className="widget-table float-effect col-10 offset-1 col-lg-4 offset-lg-0">
				<WidgetTitle />
				<Widget />
				<Widget />
				<Widget />
			</div>
		</Fragment>
	);
};

WidgetTable.propTypes = {};

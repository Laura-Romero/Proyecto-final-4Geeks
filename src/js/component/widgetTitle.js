import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/userInterface.scss";

export const WidgetTitle = props => {
	return (
		<Fragment>
			<div>
				<h2 className="widget-title">Select Widget</h2>
				<p className="widget-instructions">
					Drag the widget you want to see in your mirror in the position you want it to be.
				</p>
			</div>
		</Fragment>
	);
};

WidgetTitle.propTypes = {};

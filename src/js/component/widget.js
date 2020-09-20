import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/userInterface.scss";

export const Widget = props => {
	return (
		<Fragment>
			<div className="float-effect widget-properties col-10 offset-1 col-md-10 offset-md-2 d-flex pop">
				<div className="widget--logo col-2 offset-1 mr-1 d-flex justify-content-center">
					<i className={props.widgetClassName} aria-hidden="true" />
				</div>
				<div className="widget-item col-9 p-0 d-flex">
					<p className="m-0 widget-text">{props.widgetName}</p>
				</div>
			</div>
		</Fragment>
	);
};

Widget.propTypes = {
	widgetName: PropTypes.string,
	widgetClassName: PropTypes.string
};

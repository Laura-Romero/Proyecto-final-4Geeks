import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/userInterface.scss";

export const Widget = props => {
	return (
		<Fragment>
			<div className="float-effect widget-properties col-10 offset-1 col-lg-10 offset-lg-1 p-2">
				<div className="widget-item d-flex">
					<div className="widget-dot" />
					<i className="widget-icon fa fa-twitter pt-1 col-1 col-lg-2" aria-hidden="true" />
					<p className="col-10 col-lg-5 widget-text">Twitter</p>
				</div>
			</div>
		</Fragment>
	);
};

Widget.propTypes = {};

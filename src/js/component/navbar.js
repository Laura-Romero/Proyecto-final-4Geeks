import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/navbar.scss";

export const Navbar = props => {
	return (
		<div className="category-navbar navbar navbar navbar--background-color d-flex justify-content-end">
			<Link to={props.linkTo} className="m-0 nav-item navbar__button d-flex">
				{props.navbarButton}
			</Link>
		</div>
	);
};

Navbar.propTypes = {
	navbarButton: PropTypes.string,
	linkTo: PropTypes.string
};

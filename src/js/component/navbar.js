import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<nav className="navbar navbar-light d-flex justify-content-between p-0">
			<a className="navbar-brand mx-2" href="#">
				El espejo inteligente jeje
			</a>
			<a className="navbar-brand mx-2" href="#">
				{props.navbarButton}
			</a>
		</nav>
	);
};

Navbar.propTypes = {
	navbarButton: PropTypes.string
};

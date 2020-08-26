import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/navbar.scss";

export const Navbar = props => {
	return (
		<nav className="category-navbar navbar navbar-expand navbar--background-color">
			<div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
				<ul className="navbar-nav ">
					<li className="nav-item navbar__button">
						<a className="m-0">{props.navbarButton}</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	navbarButton: PropTypes.string
};

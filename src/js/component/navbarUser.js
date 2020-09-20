import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/navbarUser.scss";

export const NavbarUser = props => {
	return (
		<div className="category-navbar navbar navbar--user user-navbar--background-color d-flex">
			<i className="fa fa-television nav-item ml-4" aria-hidden="true" />
			<span className="m-0 nav-item user-navbar__button d-flex">
				{props.navbarUButton}
				<i className="fa fa-sign-out ml-1 p-1" aria-hidden="true" />
			</span>
		</div>
	);
};

NavbarUser.propTypes = {
	navbarUButton: PropTypes.string
};

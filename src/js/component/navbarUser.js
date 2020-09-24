import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/navbarUser.scss";

export const NavbarUser = props => {
	return (
		<div className="category-navbar navbar navbar--user user-navbar--background-color d-flex">
			<div />
			<Link to="/" className="m-0 nav-item user-navbar__button d-flex">
				<i className="fa fa-sign-out ml-1 p-1" aria-hidden="true" />
			</Link>
		</div>
	);
};

NavbarUser.propTypes = {
	navbarUButton: PropTypes.string
};

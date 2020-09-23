import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/register.scss";
import { Navbar } from "../component/navbar";
import { Register } from "../component/register";

export const Registration = () => {
	return (
		<Fragment>
			<Navbar navbarButton="About the mirror" linkTo="/InfoAboutSection" />
			<div className="text-center mt-5" />
			<Register />
		</Fragment>
	);
};

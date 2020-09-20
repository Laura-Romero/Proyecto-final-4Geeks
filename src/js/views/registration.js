import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/register.scss";
import { Navbar } from "../component/navbar";
import { Register } from "../component/register";

export const Registration = () => {
	return (
		<Fragment>
			<Register />
		</Fragment>
	);
};

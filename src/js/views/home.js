import React, { Fragment } from "react";
import "../../styles/logger.scss";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";
import { Logger } from "../component/logger";

export const Home = () => (
	<Fragment>
		<Navbar navbarButton="About the mirror" linkTo="/InfoAboutSection" />
		<div className="text-center mt-5" />
		<Logger />
	</Fragment>
);

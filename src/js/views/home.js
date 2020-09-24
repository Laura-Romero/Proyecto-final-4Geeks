import React, { Fragment } from "react";
import "../../styles/logger.scss";
import "../../styles/home.scss";
import "../../styles/register.scss";
import { Navbar } from "../component/navbar";
import { Logger } from "../component/logger";

export const Home = () => (
	<Fragment>
		<div className="container-fluid cont-log">
			<Navbar navbarButton="About the mirror" linkTo="/InfoAboutSection" />
			<div className="text-center mt-5" />
			<div className="container">
				<Logger />
			</div>
		</div>
	</Fragment>
);

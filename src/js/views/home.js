import React, { Fragment } from "react";
import "../../styles/logger.scss";
import "../../styles/home.scss";
import "../../styles/register.scss";
import { Navbar } from "../component/navbar";

import { Logger } from "../component/logger";

import { Register } from "../component/register";


export const Home = () => (
	<Fragment>
		<Navbar navbarButton="About the mirror" linkTo="/InfoAboutSection" />
		<div className="text-center mt-5" />
		<div className="container">

			<Logger />

			<Register />

		</div>
	</Fragment>
);

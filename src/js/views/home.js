import React, { Fragment } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/register.scss";
import { Navbar } from "../component/navbar";
import { Register } from "../component/register";

export const Home = () => (
	<Fragment>
		<Navbar navbarButton="About the mirror" linkTo="/InfoAboutSection" />
		<div className="text-center mt-5" />
		<div className="container">
			<Register />
		</div>
	</Fragment>
);

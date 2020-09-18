import React, { Fragment } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";
import { Weather } from "../component/weather";

export const Home = () => (
	<Fragment>
		<Navbar navbarButton="About the mirror" linkTo="/InfoAboutSection" />
		<div className="text-center mt-5" />
		<Weather />
	</Fragment>
);

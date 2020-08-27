import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/InfoAboutSection.scss";
import { Navbar } from "../component/navbar";
import { AboutSection } from "../component/aboutSection";

export const InfoAboutSection = () => {
	return (
		<Fragment>
			<Navbar navbarButton="Back to Home" />
			<AboutSection />
		</Fragment>
	);
};

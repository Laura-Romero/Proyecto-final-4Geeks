import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/aboutSection.scss";

export const AboutSection = props => {
	return (
		<Fragment>
			<div className="info-section col-12 col-lg-8 offset-lg-2 ">
				<div className="d-flex flex-wrap">
					<img
						className="info-section-picture col-12 col-lg-4 "
						src="https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2016/05/magic-mirror-ui.jpg"
					/>
					<p className="info-section-text col-12 col-lg-8">
						<b>Reflex</b>, the smart mirror, started as an academic project for two students and ended up
						being much more than that. Reflex is able to show you widgets such as Twitter, clock,
						compliments (because is nice to start your day remembering how awesome you are), weather and
						soon, Gmail and your To do list. <br />
						What makes
						<b> Reflex </b>
						different is that most smart mirrors have widgets in a fixed position, that does not happen with
						us, you can choose how you want your layout to look always leaving enough place to that pretty
						face.
					</p>
				</div>
				<div>
					<p className="info-section-text col-12">
						A double faced mirror, LCD screen and a Raspberry Pi 3B+ are the main parts which make
						<b> Reflex </b>a whole. The powerful Raspberry Pi controls the screen, it will always show a
						black screen with the widgets on, why? well, the double faced mirror as long as it has a black
						background will work as a normal mirror. The widgets have different colors so they show through
						the mirror. <br />
						<br /> Sounds awesome, right? <br />
						<br />
						Give it a try and get all of these functionalities in one practical mirror!
					</p>
				</div>
			</div>
		</Fragment>
	);
};

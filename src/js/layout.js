import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UserInterface } from "./views/userInterface";
import { InfoAboutSection } from "./views/InfoAboutSection";
import { TwitterWidget } from "./component/twitterwidget";
import { Compliments } from "./component/compliments";
import { Clock } from "./component/clock";
import { MirrorScreen } from "./views/mirrorScreen";

import { Logger } from "./component/logger";
import { Register } from "./component/register";
import { Registration } from "./views/registration";
import { Weather } from "./component/weather";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/InfoAboutSection">
							<InfoAboutSection />
						</Route>
						<Route exact path="/mirror">
							<MirrorScreen />
						</Route>
						<Route exact path="/registration">
							<Registration />
						</Route>
						<Route exact path="/userInterface">
							<UserInterface />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

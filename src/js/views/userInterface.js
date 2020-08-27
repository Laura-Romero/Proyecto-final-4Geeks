import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/userInterface.scss";
import { WidgetTable } from "../component/widgetTable";
import { MirrorLayoutExample } from "../component/mirrorLayoutExample";
import { Navbar } from "../component/navbar";
import { NavbarUser } from "../component/navbarUser";

export const UserInterface = () => {
	return (
		<Fragment>
			<NavbarUser navbarUButton="Log Out" />
			<div className="user-interface">
				<WidgetTable />
				<MirrorLayoutExample />
			</div>
		</Fragment>
	);
};

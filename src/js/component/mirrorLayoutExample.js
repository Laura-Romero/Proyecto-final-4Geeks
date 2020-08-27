import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/mirrorLayoutExample.scss";

export const MirrorLayoutExample = () => {
	return (
		<Fragment>
			<div className="mirror-layout-box float-effect col-10 offset-1 col-md-7 offset-md-0 p-0">
				<div className="top-position-boxes d-flex justify-content-between">
					<div className="col-4 horizontal-position-box ">position 1</div>
					<div className="col-4 horizontal-position-box ">position 2</div>
					<div className="col-4 horizontal-position-box ">position 3</div>
				</div>
				<div className="middle-position-boxes d-flex justify-content-between">
					<div className="col-3 vertical-position-box ">position 4</div>
					<div className="col-6 vertical-position-box px-1">This is your beautiful reflex ;)</div>
					<div className="col-3 vertical-position-box ">position 5</div>
				</div>
				<div className="top-position-boxes d-flex justify-content-between">
					<div className="col-4 horizontal-position-box ">position 6</div>
					<div className="col-4 horizontal-position-box ">position 7</div>
					<div className="col-4 horizontal-position-box ">position 8</div>
				</div>
			</div>
		</Fragment>
	);
};

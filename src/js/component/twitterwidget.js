import React, { Fragment, useState, useEffect, useContext } from "react";
import "../../styles/twitterWidget.scss";
import { Context } from "../store/appContext";
import { Widget } from "./widget";

export const TwitterWidget = () => {
	const { store } = useContext(Context);

	return (
		<Fragment>
			<div className="twitterBox">
				<div className="twitterHeader">
					<i className="fa fa-twitter tw-logo" aria-hidden="true" />
					<p className="tw-title">Twitter</p>
				</div>
				<div className="tweet-list">
					{store.tweets
						? store.tweets.map((item, index) => {
								return (
									<div className="tweetBox" key={index}>
										<p className="tweetText">
											{"@" + item[0]}
											<br />
											{item[1]}
										</p>
									</div>
								);
						  })
						: "Loading Tweets"}
				</div>
			</div>
		</Fragment>
	);
};

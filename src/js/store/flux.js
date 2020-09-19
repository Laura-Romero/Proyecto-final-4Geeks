const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			widgetInfo: [
				{
					title: "Twitter",
					class: "widget-icon fa fa-twitter"
				},
				{
					title: "Gmail",
					class: "widget-icon fa fa-google"
				},
				{
					title: "Weather",
					class: "widget-icon fa fa-cloud"
				},
				{
					title: "Clock",
					class: "widget-icon fa fa-clock-o"
				},
				{
					title: "Compliments",
					class: "widget-icon fa fa-heart"
				},
				{
					title: "To do list",
					class: "widget-icon fa fa-tasks"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getTweets: async () => {
				let response = await fetch(
					`https://3000-ca788549-3ff8-4b13-84a1-3f5ffcf84ebf.ws-eu01.gitpod.io/twitter`
				);
				let data = await response.json();
				console.log(data);
				setStore({ tweets: data });
			}
		}
	};
};

export default getState;

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
			],
			widgetMirror: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getTweets: async () => {
				let response = await fetch("https://mirrorify.herokuapp.com/twitter");
				let data = await response.json();
				setStore({ tweets: data });
			},

			setWidgetArray: async widgetArrayItems => {
				let widgetArray = [];
				for (let item in widgetArrayItems) {
					widgetArray.push(widgetArrayItems[item]["name"]);
				}
				setStore({ widgetMirror: widgetArray });
			}
		}
	};
};

export default getState;

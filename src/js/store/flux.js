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
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

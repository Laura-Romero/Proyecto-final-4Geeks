const getState = ({ getStore, getActions, setStore }) => {
	const ApiConfig = {
		ownKey: "4cd5539f8e0617ff4cc0a570dd24742a"
	};
	return {
		store: {
			dailyData: {},
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
			loadWeather: city => {
				const weatherURL = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=4cd5539f8e0617ff4cc0a570dd24742a`;
				fetch(weatherURL)
					.then(res => res.json())
					.then(data => {
						console.log(data.list[0]);
						const dailyData = data.list[0];
						setStore({
							dailyData: dailyData
						});
					});
			}
		}
	};
};

export default getState;

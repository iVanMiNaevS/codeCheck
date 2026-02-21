export default {
	routes: [
		{
			method: "GET",
			path: "/filters",
			handler: "filter.index",
			config: {
				auth: false, // или true, если нужен токен
			},
		},
	],
};

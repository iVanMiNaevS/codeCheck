export const filters = [
	{
		title: "Язык",
		name: "lang",
		options: [
			{ text: "C#", value: "C#" },
			{ text: "Python", value: "python" },
		],
	},
	{
		title: "Сложность",
		name: "mode",
		options: [
			{ text: "Легко", value: "easy" },
			{ text: "Средне", value: "Medium" },
			{ text: "Сложно", value: "hard" },
		],
	},
	{
		title: "Теги",
		name: "tags",
		multiply: true,
		options: [
			{ text: "Алгебра", value: "algebra" },
			{ text: "Алгоритмы", value: "algoritm" },
			{ text: "Логика", value: "logic" },
			{ text: "Основы языка", value: "base-lang" },
		],
	},
];

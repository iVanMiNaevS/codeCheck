export default {
	async index(ctx) {
		const [difficulties, languages, tags] = await Promise.all([
			strapi.entityService.findMany("api::mode.mode", {
				fields: ["title", "slug"],
			}),
			strapi.entityService.findMany("api::language.language", {
				fields: ["title", "slug"],
			}),
			strapi.entityService.findMany("api::tag.tag", {
				fields: ["title", "slug"],
			}),
		]);

		ctx.body = [
			{
				title: "Сложность",
				filters: difficulties,
			},
			{
				title: "Язык",
				filters: languages,
			},
			{
				title: "Теги",
				isMultiply: true,
				filters: tags,
			},
		];
	},
};

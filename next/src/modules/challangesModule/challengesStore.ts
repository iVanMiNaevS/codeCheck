import { ChallengeType } from "@/types/challenges";
import { fetchFromStrapi } from "@/utils/fetchFromStrapi";
import { makeAutoObservable, toJS } from "mobx";

interface filterType {
	filter: string;
	value: string | string[];
}

export class ChallengesStore {
	filters: filterType[] = [];
	challenges: ChallengeType[] = [];
	private loading: boolean = false;

	constructor(challenges: ChallengeType[]) {
		this.challenges = challenges;
		makeAutoObservable(this);
	}

	setChallenges(challenges: ChallengeType[]) {
		this.challenges = challenges;
	}

	setFilters(filter: string, value: string | string[], isMultiply: boolean) {
		const filterIndex = this.filters.findIndex((itemFilter) => {
			return itemFilter.filter === filter;
		});
		if (filterIndex !== -1) {
			this.filters[filterIndex].value = value;
		} else {
			this.filters.push({ filter, value });
		}
	}

	get getLoading (){
		return this.loading
	}

	async applyFilter() {
		console.log('d')
		try{
			this.loading = true
			const populate = this.filters
			.map((f) => {
				if (Array.isArray(f.value)) {
					return f.value
						.map(
							(value, index) =>
								`filters[$and][${index}][${f.filter}][slug][$eq]=${encodeURIComponent(value)}`,
						)
						.join("&");
				}
				return `filters[${f.filter}][slug][$eq]=${encodeURIComponent(f.value)}`;
			})
			.join("&");

			const challengesPopulate =
				"?populate[tags]=true&populate[mode]=true&populate[languages][populate][icon][fields][0]=url";

			const filterChall = await fetchFromStrapi("challenges", `${challengesPopulate}&${populate}`);

			this.setChallenges([...filterChall.data]);
			this.loading = false
		}catch(e){
			console.error("Ошибка при применении фильтров: ", e)
		}
		
	}

	async resetFilter() {
		const challengesPopulate =
			"?populate[tags]=true&populate[mode]=true&populate[languages][populate][icon][fields][0]=url";
		const filterChall = await fetchFromStrapi("challenges", `${challengesPopulate}`);
		this.filters = [];
		this.setChallenges([...filterChall.data]);
	}
}

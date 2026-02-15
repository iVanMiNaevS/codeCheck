import { Filter } from "@/types/common";
import { fetchFromStrapi } from "@/utils/fetchFromStrapi";
import { makeAutoObservable } from "mobx";

export class ChallengesStore {
	filters: Filter[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	async initFilters() {
		this.filters = await fetchFromStrapi("filters");
		console.log(this.filters);
	}
}

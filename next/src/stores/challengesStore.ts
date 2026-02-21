import { ChallengeType, Filter } from "@/types/challenges";
import { fetchFromStrapi } from "@/utils/fetchFromStrapi";
import { makeAutoObservable } from "mobx";

export class ChallengesStore {
	filters: Filter[] = [];
	challenges: ChallengeType[] = [];

	constructor(challenges: ChallengeType[]) {
		this.challenges = challenges;
		makeAutoObservable(this);
	}
}

import { ChallengesStore } from "./challengesStore";

export class RootStore {
	challengeStore: ChallengesStore;

	constructor() {
		this.challengeStore = new ChallengesStore();
	}
}

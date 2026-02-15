import { RootStore } from "./rootStore";

let clientStore: RootStore | null = null;

export function initializeStore() {
	const store = typeof window === "undefined" ? new RootStore() : (clientStore ?? new RootStore());

	if (typeof window !== "undefined" && !clientStore) {
		clientStore = store;
	}

	return store;
}

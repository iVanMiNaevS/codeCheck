import styles from "./styles/challenges.module.scss";
import { MainContainer } from "@/components/MainContainer";
import { Filters } from "@/components/Challenges/Filters";
import { observer } from "mobx-react-lite";
import { GetStaticPropsResult } from "next";
import { fetchFromStrapi } from "@/utils/fetchFromStrapi";
import { ChallengeType, Filter } from "@/types/challenges";
import { Meta } from "@/types/common";
import { ChallengesStore } from "@/stores/challengesStore";
import { Challenge } from "@/components/Challenges/Challenge";
import { MainLayout } from "@/components/MainLayout";
import { useState } from "react";

interface ChallengesProps {
	challengesData: {
		data: ChallengeType[];
		meta: Meta;
	};
	filters: Filter[];
}

const Challenges = observer((props: ChallengesProps) => {
	const { challengesData, filters } = props;
	const [store] = useState(() => new ChallengesStore(challengesData.data));

	const challenges = store.challenges;

	return (
		<MainLayout>
			<MainContainer>
				<div className={styles.container}>
					<Filters store={store} filters={filters} />
					<div className={styles.challenges}>
						{challenges.length !== 0 &&
							challenges.map((chall) => {
								return <Challenge key={chall.id} challenge={chall} />;
							})}
						{challenges.length === 0 && <p>Нет таких</p>}
					</div>
				</div>
			</MainContainer>
		</MainLayout>
	);
});

export async function getStaticProps(): Promise<GetStaticPropsResult<ChallengesProps>> {
	const challengesPopulate =
		"?populate[tags]=true&populate[mode]=true&populate[languages][populate][icon][fields][0]=url";
	const challengesData = await fetchFromStrapi("challenges", challengesPopulate);
	const filters = await fetchFromStrapi("filters");
	return {
		props: {
			challengesData,
			filters,
		},
	};
}

export default Challenges;

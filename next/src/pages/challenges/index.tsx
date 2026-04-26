import { MainContainer } from "@/components/MainContainer";
import { observer } from "mobx-react-lite";
import { GetStaticPropsResult } from "next";
import { fetchFromStrapi } from "@/utils/fetchFromStrapi";
import { ChallengesData, Filter } from "@/types/challenges";
import { MainLayout } from "@/components/MainLayout";
import ChallengesModule from "@/modules/challangesModule";

interface ChallengesProps {
	challengesData: ChallengesData
	filters: Filter[];
}

const Challenges = observer((props: ChallengesProps) => {
	const { challengesData, filters } = props;

	return (
		<MainLayout>
			<MainContainer>
				<ChallengesModule challengesData={challengesData} filters={filters} />
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

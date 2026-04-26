import { MainContainer } from '@/components/MainContainer'
import { MainLayout } from '@/components/MainLayout'
import { MarkdownRender } from '@/components/MarkdownRender'
import ChallengeModule from '@/modules/challengeModule'
import { ChallengeType, ChallengesData } from '@/types/challenges'
import { fetchFromStrapi } from '@/utils/fetchFromStrapi'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'

interface ChallengeProps{
    challengeData: ChallengeType
}

function Challenge({challengeData}: ChallengeProps) {
    return (
        <MainLayout>
            <MainContainer>
                <ChallengeModule challengeData={challengeData}/>
            </MainContainer>
        </MainLayout>
    )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const challengesPopulate =
		"?populate[tags]=true&populate[mode]=true&populate[languages][populate][icon][fields][0]=url";
	const challengesData: ChallengesData = await fetchFromStrapi("challenges", challengesPopulate);

    const paths = challengesData.data.map(challenge=>{return {params: {id: challenge.id.toString()}}})
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}: {params: {id: string}}): Promise<GetStaticPropsResult<ChallengeProps>> {
    const id = params.id

    try{
        const challengesPopulate =
            `?populate[tags]=true&populate[mode]=true&populate[languages][populate][icon][fields][0]=url&filters[id][$eq]=${id}`;
        const challengeData: ChallengesData = await fetchFromStrapi(`challenges`, challengesPopulate);

        if(challengeData.data.length === 0){
            return{
                notFound: true
            }
        }
        return {
            props: {
                challengeData: challengeData.data[0],
            },
        };
    }catch(e){
        console.error(`Ошибка получения challenge: ${id}. Ошибка: ${e}`)
        return {
            notFound: true,
        };
    }
}

export default Challenge
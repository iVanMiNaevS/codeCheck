import { useState } from 'react'
import styles from './styles/_challenges.module.scss'
import { Filters } from './Filters';
import { ChallengesStore } from './challengesStore';
import { ChallengesData, Filter } from '@/types/challenges';
import { Challenge } from '../../components/Challenge';
import { observer } from 'mobx-react-lite';
import { SkeletonLoader } from './SkeletonLoader';

interface ChallengesModuleProps {
    challengesData: ChallengesData;
    filters: Filter[]
}

const ChallengesModule = observer((props:ChallengesModuleProps) => {
    const {challengesData, filters} = props

    const [store] = useState(() => new ChallengesStore(challengesData.data));

    return (
        <div className={styles.container}>
            <Filters store={store} filters={filters} />
            {store.getLoading
            ? <SkeletonLoader/>
            :  <div className={styles.challenges}>
                {store.challenges.length !== 0 &&
                    store.challenges.map((chall) => {
                        return <Challenge key={chall.id} challenge={chall} />;
                    })}
                {store.challenges.length === 0 && <p>Нет таких</p>}
            </div>}
        </div>
    )
})
export default ChallengesModule
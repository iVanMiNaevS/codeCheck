import { useState } from 'react'
import styles from './styles/challenges.module.scss'
import { Filters } from './Filters';
import { ChallengesStore } from './challengesStore';
import { ChallengesData, Filter } from '@/types/challenges';
import { Challenge } from './Challenge';

interface ChallengesModuleProps {
    challengesData: ChallengesData;
    filters: Filter[]
}

export default function ChallengesModule(props:ChallengesModuleProps) {
    const {challengesData, filters} = props

    const [store] = useState(() => new ChallengesStore(challengesData.data));

    return (
        <div className={styles.container}>
            <Filters store={store} filters={filters} />
            <div className={styles.challenges}>
                {store.challenges.length !== 0 &&
                    store.challenges.map((chall) => {
                        return <Challenge key={chall.id} challenge={chall} />;
                    })}
                {store.challenges.length === 0 && <p>Нет таких</p>}
            </div>
        </div>
    )
}

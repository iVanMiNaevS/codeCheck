import React, { useState } from 'react'
import styles from './styles/_challenge.module.scss'
import { ChallengeType } from '@/types/challenges'
import { ChallengeStore } from './challengeStore'
import { observer } from 'mobx-react-lite'
import { Info } from './info'
import { Code } from './code'

interface ChallengeModuleProps{
    challengeData: ChallengeType
}

const ChallengeModule = observer((props: ChallengeModuleProps) => {
    const {challengeData} = props

    const [store] = useState(() => new ChallengeStore(challengeData));

    return (
        <div className={styles.container}>
            <Info store={store}/>
            <Code store={store}/>
        </div>
    )
})

export default ChallengeModule
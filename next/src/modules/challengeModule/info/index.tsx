import { useState } from 'react'

import styles from './styles/_info.module.scss'
import { Tabs } from '@/components/Tabs';
import { ChallengeStore } from '../challengeStore';
import { MarkdownRender } from '@/components/MarkdownRender';
import Tag from '@/components/Tag';

interface InfoProps {
    store: ChallengeStore
}

type tabs = 'manual' | 'solution'

const tabs: {title: string, value: tabs}[] = [{title: 'Инструкция', value: "manual" }, {title: 'Решения', value: 'solution'}];

export const Info = (props: InfoProps) => {
    const {store} = props;

    const {challenge} = store

    const {manual} = challenge

    const [activeTab, setActiveTab] = useState<tabs>('manual')

    return (
        <div className={styles.container}>
            <Tabs tabs={tabs} changeTab={(activeTab)=>{setActiveTab(activeTab)}} activeTab={activeTab} />
            {activeTab === 'manual' && (
                <div className={styles.manual_container}>
                    <div className={styles.manual_challenge}>
                        <h1 className={styles.challenge_title}>{challenge.title}</h1>
                        <div className={styles.challenge_bottom}>
                            {challenge.tags.map(tag=> <Tag tag={tag.title}/>)}
                            <Tag tag={challenge.mode.title} mode='mode'/>
                        </div>
                    </div>
                    <MarkdownRender extClass={styles.manual_md} content={manual}/>
                </div>
            )}
            {activeTab === 'solution' && <div>Решения</div>}
        </div>
    )
}

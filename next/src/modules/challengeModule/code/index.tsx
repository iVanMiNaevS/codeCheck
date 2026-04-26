import { observer } from 'mobx-react-lite'
import { ChallengeStore } from '../challengeStore'
import { useState } from 'react'

import styles from './styles/_code.module.scss'
import { Tabs } from '@/components/Tabs'
import { CodeEditor } from '@/components/CodeEditor'

interface CodeProps {
    store: ChallengeStore
}

type tabs = 'code' | "output" |'tests'

const tabs: {title: string, value: tabs}[] = [{title: 'Код', value: "code" }, {title: 'Вывод', value: 'output'}, {title: 'Тесты', value: 'tests'}];

export const Code = observer(({store}: CodeProps) => {

    const [activeTab, setActiveTab] = useState<tabs>('code')

    const {code, setCode} = store

    return (
        <div className={styles.container}>
            <Tabs tabs={tabs} changeTab={(activeTab)=>{setActiveTab(activeTab)}} activeTab={activeTab} />
            {activeTab === 'code' && <CodeEditor extClass={styles.code_editor} value={code} changeValue={setCode} />}
        </div>
    )
})

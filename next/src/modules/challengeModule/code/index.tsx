import { observer } from 'mobx-react-lite'
import { ChallengeStore } from '../challengeStore'
import { useState } from 'react'

import styles from './styles/_code.module.scss'
import { Tabs } from '@/components/Tabs'

import { oneDark } from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript';
import dynamic from 'next/dynamic';

const ReactCodeMirror = dynamic(() => import('@uiw/react-codemirror'), {
    ssr: false,
});

interface CodeProps {
    store: ChallengeStore
}

type tabsType = 'code' | "output" |'tests'

const tabs: {title: string, value: tabsType}[] = [{title: 'Код', value: "code" }, {title: 'Вывод', value: 'output'}, {title: 'Тесты', value: 'tests'}];

export const Code = observer(({store}: CodeProps) => {

    const [activeTab, setActiveTab] = useState<tabsType>('code')

    return (
        <div className={styles.container}>
            <Tabs tabs={tabs} changeTab={(activeTab)=>{setActiveTab(activeTab)}} activeTab={activeTab} />
            {activeTab === 'code' && 
                <ReactCodeMirror
                    value={store.code}
                    height="400px"
                    theme={oneDark}
                    extensions={[javascript()]}
                    onChange={(value) => store.setCode(value)}
                />
            }
            <button className={styles.btn_code_check} onClick={()=>{store.submitCode()}}>Проверить</button>
        </div>
    )
})

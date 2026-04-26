import React from 'react'

import styles from './styles/_tabs.module.scss'

interface TabsProps<T extends string> {
    tabs: {title: string, value: T}[]
    changeTab: (activeTab: T)=> void;
    activeTab: T
}

export function Tabs<T extends string>({ tabs, changeTab, activeTab }: TabsProps<T>) {
    return (
        <div className={styles.container}>
        {tabs.map(tab=>
            <div
                key={tab.value}
                onClick={() => changeTab(tab.value)}
                className={`${styles.tab} ${activeTab === tab.value && styles.active}`}
            >
            {tab.title}
            </div>    
        )}
        </div>
    )
}

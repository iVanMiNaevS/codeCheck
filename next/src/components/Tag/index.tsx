import React from 'react'
import styles from './styles/_tag.module.scss'

interface TagProps{
    tag: string;
    mode?: 'tag' | 'mode',
}

function Tag({tag, mode = 'tag'}:TagProps) {
  return (
    <div className={`${styles.chell_option} ${mode === 'mode' && styles.chell_mode}`}>
        {tag}
    </div>
  )
}

export default Tag
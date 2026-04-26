import Markdown from 'react-markdown'

import styles from './styles/_markdown.module.scss'

interface MarkdownRenderProps {
  content: string;
  extClass?: string;
}

export const MarkdownRender = ({content, extClass}: MarkdownRenderProps) => {
  return (
    <div className={`${styles.container} ${extClass}`}>
      <Markdown>{content}</Markdown>
    </div>
  )
}

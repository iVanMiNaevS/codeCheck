import { oneDark } from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript';
import dynamic from 'next/dynamic';

const ReactCodeMirror = dynamic(() => import('@uiw/react-codemirror'), {
    ssr: false,
});

interface CodeEditorProps {
    value: string;
    changeValue: (value: string)=>void;
    extClass?: string;
}

export const CodeEditor = ({value, changeValue, extClass}:CodeEditorProps) => {
  return (
    <div className={extClass}>
        <ReactCodeMirror
            value={value}
            height="400px"
            theme={oneDark}
            extensions={[javascript()]}
            onChange={(value) => changeValue(value)}
            />
    </div>
  )
}

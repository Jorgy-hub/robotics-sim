'use client';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState, useCallback, SetStateAction } from 'react';
import { material } from '@uiw/codemirror-theme-material';
export default function Editor() {
    const [value, setValue] = useState("console.log('hello world!');");
    const onChange = useCallback((val: SetStateAction<string>, viewUpdate: any) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    return <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} theme={material}/>;
}
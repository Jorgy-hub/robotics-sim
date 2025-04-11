'use client';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState, useCallback, SetStateAction, Dispatch } from 'react';
import { material } from '@uiw/codemirror-theme-material';

interface EditorProps {
    setValue: Dispatch<SetStateAction<string>>;
    value: string;
}

export default function Editor(props: EditorProps) {
    const { setValue, value } = props;

    const onChange = useCallback((val: SetStateAction<string>, viewUpdate: any) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    return <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} theme={material}/>;
}
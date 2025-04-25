import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';

interface Props {
    value?: string;
    onChange?: (value: string) => void;
}

const CustomTextEditor: React.FC<Props> = ({ value = "", onChange }) => {
    const [editorValue, setEditorValue] = useState(value);

    useEffect(() => {
        setEditorValue(value);
    }, [value]);

    const handleChange = (val: string) => {
        setEditorValue(val);
        if (onChange) onChange(val);
    };

    return (
        <ReactQuill value={editorValue} onChange={handleChange} />
    );
};

export default CustomTextEditor;

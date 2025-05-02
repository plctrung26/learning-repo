import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';
import './CustomTextEditor.scss';

interface Props {
    toolbarId: string
    value?: string;
    onChange?: (value: string) => void;
}

const CustomTextEditor: React.FC<Props> = ({ toolbarId, value = "", onChange }) => {
    const [editorValue, setEditorValue] = useState(value);

    const [isToolbarReady, setToolbarReady] = useState(false);

    useEffect(() => {
        setEditorValue(value);
    }, [value]);

    const handleChange = (val: string) => {
        setEditorValue(val);
        if (onChange) onChange(val);
    };

    const modules = {
        toolbar: {
            container: `#${toolbarId}`
        }
    };

    useEffect(() => {
        const toolbar = document.getElementById(toolbarId);
        if (toolbar) {
            setToolbarReady(true);
        } else {
            setToolbarReady(false);
        }
    }, [isToolbarReady]);

    return (
        <div>
            {isToolbarReady && (
                <ReactQuill
                    value={editorValue}
                    onChange={handleChange}
                    modules={modules}
                />
            )}
        </div>
    );
};

export default CustomTextEditor;
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';
import './CustomTextEditor.scss';
import CustomToolbar from "./CustomEditorToolbar";

interface Props {
    value?: string;
    onChange?: (value: string) => void;
}

const CustomTextEditor: React.FC<Props> = ({ value = "", onChange }) => {
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
            container: "#editor-toolbar"
        }
    };

    useEffect(() => {
        const toolbar = document.getElementById('editor-toolbar');
        if (toolbar) {
            console.log('Toolbar is ready:', toolbar);
            setToolbarReady(true);
        } else {
            console.error('Toolbar element not found.');
        }
    }, []);

    return (
        <div>
            <CustomToolbar />
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
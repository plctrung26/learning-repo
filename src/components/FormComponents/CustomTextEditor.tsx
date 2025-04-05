import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';


type Props = {
    text: string
};


const CustomTextEditor: React.FC<Props> = ({ text }) => {
    const [value, setValue] = useState("");
    useEffect(() => {
        setValue(text)
    }, [text])

    return (
        <div>
            <ReactQuill value={value} onChange={setValue} />
        </div>

    );
};

export default CustomTextEditor;

import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';


const CustomTextEditor: React.FC = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <ReactQuill value={value} onChange={setValue} />
        </div>

    );
};

export default CustomTextEditor;

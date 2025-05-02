const CustomToolbar = () => {
    return (
        <div id="editor-toolbar">
            <select className="ql-header" defaultValue="normal">
                <option value="1">Heading</option>
                <option value="2">Subheading</option>
                <option value="normal">Normal</option>
            </select>
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
            <button className="ql-strike"></button>
            <button className="ql-blockquote"></button>
            <button className="ql-link"></button>
            <select className="ql-font" defaultValue="normal">
                <option value="sans-serif">Sans Serif</option>
                <option value="serif">Serif</option>
                <option value="monospace">Monospace</option>
            </select>
            <select className="ql-align" />
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <button className="ql-clean"></button>
            <select className="ql-color"></select>
            <select className="ql-background"></select>

        </div>
    )
}

export default CustomToolbar


import { Select, SelectProps } from "antd"
import React from "react";

const CustomSelect: React.FC<SelectProps> = ({ ...SelectProps }) => {
    return (
        <Select
            defaultValue=""
            onChange={() => { console.log("im select") }}
            {...SelectProps}

        />

    )
}

export default CustomSelect;
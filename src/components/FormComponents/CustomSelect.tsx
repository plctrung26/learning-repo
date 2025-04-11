import { Select, SelectProps } from "antd"
import React from "react";

const CustomSelect: React.FC<SelectProps> = ({ ...SelectProps }) => {
    return (
        <Select
            defaultValue=""
            onChange={() => { console.log("im select") }}
            options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
            {...SelectProps}

        />

    )
}

export default CustomSelect;
import { Select, SelectProps } from "antd"


const CustomSelect: React.FC<SelectProps> = ({ ...SelectProps }) => {
    return (
        <Select
            className="custom-form-item"
            defaultValue=""
            onChange={() => { console.log("im select") }}
            {...SelectProps}

        />

    )
}

export default CustomSelect;
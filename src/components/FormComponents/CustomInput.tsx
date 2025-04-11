import { Input, InputProps } from "antd"
import React from "react"

interface CustomInputProps extends InputProps {

}

const CustomInput: React.FC<CustomInputProps> = ({ ...InputProps }) => {
    return (
        <Input {...InputProps}></Input>
    )
}

export default CustomInput
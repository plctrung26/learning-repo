import { Input, InputProps } from "antd"


interface CustomInputProps extends InputProps {

}

const CustomInput: React.FC<CustomInputProps> = ({ ...InputProps }) => {
    return (
        <Input {...InputProps}></Input>
    )
}

export default CustomInput
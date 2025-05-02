import { Input, InputProps } from "antd"
import './FormItemStyling.scss'


interface CustomInputProps extends InputProps {

}

const CustomInput: React.FC<CustomInputProps> = ({ ...InputProps }) => {
    return (
        <Input
            className="custom-form-item"
            {...InputProps}></Input>
    )
}

export default CustomInput
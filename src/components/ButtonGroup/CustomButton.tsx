import { Button, ButtonProps } from "antd"

interface CustomButtonProps extends ButtonProps {
    openType?: "modal" | "drawer" | "warning" | undefined
}

const CustomButton: React.FC<CustomButtonProps> = ({ openType, ...ButtonProps }) => {

    return (
        <Button {...ButtonProps}></Button>

    )
}

export default CustomButton
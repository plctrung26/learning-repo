import { Badge } from "antd"
import './CustomBadge.scss'

interface CustomBadgeProps {
    text?: string
    colorFunction: (value: string) => string
}

const CustomBadge = ({ text = "", colorFunction }: CustomBadgeProps) => {
    return (
        <Badge
            color={colorFunction(text)}
            text={text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()}
            dot />
    )

}

export default CustomBadge
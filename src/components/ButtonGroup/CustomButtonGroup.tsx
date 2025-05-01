import { Button } from "antd"
import { EditOutlined, EyeOutlined, RestOutlined } from '@ant-design/icons';
import './ButtonGroup.scss'

interface CustomButtonGroupProps {
    isEdit?: boolean
    isDetail?: boolean
    isDelete?: boolean
    handleEditClick?: () => void
    handleDeleteClick?: () => void
    handleDetailClick?: () => void
}

const CustomButtonGroup = ({
    isEdit = false,
    isDelete = false,
    isDetail = false,
    handleDeleteClick = () => { },
    handleDetailClick = () => { },
    handleEditClick = () => { },
}: CustomButtonGroupProps) => {
    return (
        <div className="button-group-container">
            {isDetail && <Button
                icon={<EyeOutlined className='button-icon' />}
                className='button-group-item'
                shape='circle'
                onClick={handleDetailClick}
            />}
            {isEdit && <Button
                icon={<EditOutlined className='button-icon' />}
                className='button-group-item'
                shape='circle'
                onClick={handleEditClick}
            />}

            {isDelete && <Button
                icon={<RestOutlined className='button-icon delete-button' />}
                className='button-group-item'
                shape='circle'
                onClick={handleDeleteClick}
            />}
        </div>
    )
}

export default CustomButtonGroup
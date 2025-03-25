import { EditOutlined, EyeOutlined, RestOutlined } from '@ant-design/icons';
import './ButtonGroup.scss'
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import CustomForm from "../CustomForm/CustomForm";

interface ButtonGroupProps {
    isEdit?: boolean
    isDelete?: boolean
    isDetail?: boolean
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ isEdit, isDelete, isDetail }) => {
    return (
        <div className="button-group-container">
            {isDetail &&
                <CustomDrawer toolTipTitle="Detail" openButtonIcon={<EyeOutlined style={{ fontSize: '18px' }} />}>
                    <CustomForm />
                </CustomDrawer>
            }
            {isEdit &&
                <CustomDrawer toolTipTitle="Update" openButtonIcon={<EditOutlined style={{ fontSize: '18px', color: '#FA5E92' }} />} submitButtonText='Submit'>
                    <CustomForm />
                </CustomDrawer>
            }
            {isDelete &&
                <CustomDrawer toolTipTitle="Delete" openButtonIcon={<RestOutlined style={{ fontSize: '18px', color: '#596773' }} />}>
                    <CustomForm />
                </CustomDrawer>
            }
        </div>
    )
}

export default ButtonGroup

import { EditOutlined, EyeOutlined, RestOutlined } from '@ant-design/icons';
import './ButtonGroup.scss'
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import CustomModal from '../CutomModal/CustomModal';

interface ButtonGroupProps {
    isEdit?: boolean
    isDelete?: boolean
    isDetail?: boolean
    useModel?: boolean
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ useModel, isEdit, isDelete, isDetail }) => {
    return (
        <div className="button-group-container">
            {isDetail && useModel &&
                <CustomModal toolTipTitle="Detail" openButtonIcon={<EyeOutlined style={{ fontSize: '18px' }} />} />
            }
            {isDetail && !useModel &&
                <CustomDrawer toolTipTitle="Detail" openButtonIcon={<EyeOutlined style={{ fontSize: '18px' }} />} />
            }
            {isEdit && useModel &&
                <CustomModal toolTipTitle="Update" openButtonIcon={<EditOutlined style={{ fontSize: '18px', color: '#FA5E92' }} />} submitButtonText='Submit' />
            }
            {isEdit && !useModel &&
                <CustomDrawer toolTipTitle="Update" openButtonIcon={<EditOutlined style={{ fontSize: '18px', color: '#FA5E92' }} />} submitButtonText='Submit' />
            }
            {isDelete && useModel &&
                <CustomModal toolTipTitle="Delete" openButtonIcon={<RestOutlined style={{ fontSize: '18px', color: '#596773' }} />} />
            }
        </div>
    )
}

export default ButtonGroup

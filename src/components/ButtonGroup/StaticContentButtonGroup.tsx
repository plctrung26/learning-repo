import { EditOutlined, RestOutlined } from '@ant-design/icons';
import './ButtonGroup.scss'
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import CustomModal from '../CutomModal/CustomModal';
import { openModal } from '../../redux/modalSlice';

const StaticContentButtonGroup = () => {

    const dispatch = useDispatch()

    return (
        <div className="button-group-container">
            <Button
                icon={<EditOutlined className='button-icon' />}
                className='button-group-item'
                shape='circle'
                onClick={() => dispatch(openModal())}
            />
            <CustomModal />
            <Button
                icon={<RestOutlined className='button-icon delete-button' />}
                className='button-group-item'
                shape='circle'
            />
        </div>
    )
}

export default StaticContentButtonGroup

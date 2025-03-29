import { EditOutlined, RestOutlined } from '@ant-design/icons';
import './ButtonGroup.scss'
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { openDrawer } from '../../redux/drawerSlice';
import ArticleDrawer from '../CustomDrawer/ArticleDrawer';

const ArticleButtonGroup = () => {

    const dispatch = useDispatch()

    return (
        <div className="button-group-container">
            <Button
                icon={<EditOutlined className='button-icon' />}
                className='button-group-item'
                shape='circle'
                onClick={() => dispatch(openDrawer())}
            />
            <ArticleDrawer />
            <Button
                icon={<RestOutlined className='button-icon delete-button' />}
                className='button-group-item'
                shape='circle'
            />
        </div>
    )
}

export default ArticleButtonGroup

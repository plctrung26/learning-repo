import { EditOutlined, RestOutlined } from '@ant-design/icons';
import './ButtonGroup.scss'
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { openArticleDrawer, setArticleId } from '../../redux/articleStore/articleDrawerSlice';

const ArticleButtonGroup = ({ id }: { id: string }) => {
    const dispatch = useDispatch()
    return (
        <div className="button-group-container">
            <Button
                icon={<EditOutlined className='button-icon' />}
                className='button-group-item'
                shape='circle'
                onClick={() => {
                    console.log("Clicked")
                    dispatch(setArticleId(id))
                    dispatch(openArticleDrawer())
                }}
            />

            <Button
                icon={<RestOutlined className='button-icon delete-button' />}
                className='button-group-item'
                shape='circle'
            />
        </div>
    )
}

export default ArticleButtonGroup

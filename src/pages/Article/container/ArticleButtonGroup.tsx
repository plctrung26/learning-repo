import { EditOutlined, RestOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import '../../../components/ButtonGroup/ButtonGroup.scss'
import useArticleStore from '../../../store/article/useArticleStore';


const ArticleButtonGroup = ({ id }: { id: string }) => {
    const { setId, setAction, openArticleDrawer, openArticleModal2, setType } = useArticleStore()

    return (
        <div className="button-group-container">
            <Button
                icon={<EditOutlined className='button-icon' />}
                className='button-group-item'
                shape='circle'
                onClick={() => {
                    setId(id)
                    setAction("update")
                    openArticleDrawer()
                }}
            />

            <Button
                icon={<RestOutlined className='button-icon delete-button' />}
                className='button-group-item'
                shape='circle'
                onClick={() => {
                    setId(id)
                    setType('modal')
                    setAction("delete")
                    openArticleModal2()
                }}
            />
        </div>
    )
}

export default ArticleButtonGroup

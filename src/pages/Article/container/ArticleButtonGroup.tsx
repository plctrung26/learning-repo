import useArticleStore from '../../../store/article/useArticleStore';
import CustomButtonGroup from '../../../components/ButtonGroup/CustomButtonGroup';


const ArticleButtonGroup = ({ id }: { id: string }) => {
    const { setId, setAction, openArticleDrawer, openArticleModal2, setType } = useArticleStore()
    const handleEditClick = () => {
        setId(id)
        setAction("update")
        openArticleDrawer()
    }
    const handleDeleteClick = () => {
        setId(id)
        setType('modal')
        setAction("delete")
        openArticleModal2()
    }

    return (
        <CustomButtonGroup
            isDelete={true}
            isEdit={true}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
        />
    )
}

export default ArticleButtonGroup

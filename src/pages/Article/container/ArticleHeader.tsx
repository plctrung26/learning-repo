import CustomHeader from "../../../components/CustomHeader/CustomHeader"
import useArticleStore from "../../../store/article/useArticleStore"

const ArticleHeader = () => {
    const { openArticleDrawer, setAction } = useArticleStore()

    const handleClick = () => {
        setAction("create")
        openArticleDrawer()
    }
    return (
        <CustomHeader handleButtonClick={handleClick} />
    )
}

export default ArticleHeader
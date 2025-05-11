import CustomHeader from "../../../components/CustomHeader/CustomHeader"
import useArticleStore from "../../../store/article/useArticleStore"
import ArticleSearchBar from "./ArticleSearchBar"

const ArticleHeader = () => {
    const { openArticleDrawer, setAction } = useArticleStore()

    const handleClick = () => {
        setAction("create")
        openArticleDrawer()
    }
    return (
        <CustomHeader
            SearchBarRender={<ArticleSearchBar />}
            beadcrumbTitle={[{ title: "Article" }]}
            buttonText="Create Article"
            handleButtonClick={handleClick}
        />
    )
}

export default ArticleHeader
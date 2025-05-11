import CustomSearchBar from "../../../components/CustomSearchBar/CustomSearchBar"
import useArticleStore from "../../../store/article/useArticleStore"

const ArticleSearchBar = () => {
    const { setQueryString } = useArticleStore()
    return (
        <CustomSearchBar queryFunction={setQueryString} />
    )
}

export default ArticleSearchBar
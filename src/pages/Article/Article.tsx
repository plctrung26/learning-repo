import ArticleUpdateDrawer from "./container/ArticleUpdateDrawer";
import ArticleDeleteModal from "./container/ArticleDeleteModal";
import ArticleCreateDrawer from "./container/ArticleCreateDrawer";
import useArticleStore from "../../store/article/useArticleStore";
import ArticleDraggableTable from "./container/ArticleDraggableTable";
import useGlobalStore from "../../store/useGlobalStore";
import PageLoading from "../../components/PageLoading/PageLoading";



const Article = () => {
    const { id } = useArticleStore();
    const { isLoading } = useGlobalStore()


    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            boxSizing: 'border-box'
        }}  >
            <ArticleDraggableTable />
            <ArticleUpdateDrawer />
            <ArticleDeleteModal formData={id} />
            <ArticleCreateDrawer />
            {isLoading && <PageLoading />}
        </div>

    )
}
export default Article;
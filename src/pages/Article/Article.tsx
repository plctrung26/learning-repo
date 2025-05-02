import { Badge, TableColumnsType } from "antd";
import { ArticleDataType } from "../../types/article/ArticleDataType";
import { formatDate } from "../../utils/formatDate";
import ArticleUpdateDrawer from "./container/ArticleUpdateDrawer";

import ArticleButtonGroup from "./container/ArticleButtonGroup";
import useTableData from "../../hooks/articleHooks/useTableData";
import ArticleDeleteModal from "./container/ArticleDeleteModal";
import ArticleCreateDrawer from "./container/ArticleCreateDrawer";
import useArticleStore from "../../store/article/useArticleStore";
import ArticleDraggableTable from "./container/ArticleDraggableTable";
import useGlobalStore from "../../store/useGlobalStore";
import PageLoading from "../../components/PageLoading/PageLoading";
import { getStatusBadgeColor } from "../../utils/getStatusBadgeColor";
import CustomBadge from "../../components/CustomBadge/CustomBadge";
import CustomToolbar from "../../components/FormComponents/CustomEditorToolbar";

interface DataType extends ArticleDataType {
    key: React.Key;
    index: number
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Author',
        dataIndex: 'author',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        render: (category) => category?.name
    },
    {
        title: 'Created Date',
        dataIndex: 'createdAt',
        render: (createdAt) => formatDate(createdAt)
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status) => {
            return (
                <CustomBadge text={status} colorFunction={getStatusBadgeColor} />
            )
        }
    },
    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        width: 120,
        fixed: "right",
        render: (_, record) => <ArticleButtonGroup id={record.id} />,
    },
];

const Article = () => {
    const { data } = useTableData();
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
            <ArticleDraggableTable data={data} columns={columns}></ArticleDraggableTable>
            <ArticleUpdateDrawer />
            <ArticleDeleteModal formData={id} />
            <ArticleCreateDrawer />
            {isLoading && <PageLoading />}
        </div>

    )
}
export default Article;
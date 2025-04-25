import { TableColumnsType } from "antd";
import { ArticleDataType } from "../../types/article/ArticleDataType";
import { useEffect } from "react";
import DraggableTable from "../../components/CustomTable/DraggableTable";
import { formatDate } from "../../utils/formatDate";
import ArticleUpdateDrawer from "./container/ArticleUpdateDrawer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/articleStore/articleStore";
import React from "react";
import ArticleButtonGroup from "./container/ArticleButtonGroup";
// import { getArticleData } from "../../apis/article/articleApi";
import useTableData from "../../hooks/articleHooks/useTableData";
import ArticleDeleteModal from "./container/ArticleDeleteModal";
import ArticleCreateDrawer from "./container/ArticleCreateDrawer";

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
    // const [tableData, setTableData] = useState([])
    const { data } = useTableData();
    const id = useSelector((state: RootState) => state.drawer.id)

    useEffect(() => {
        if (data) {
            data.sort((a, b) => (a.index ?? Infinity) - (b.index ?? Infinity));
        }
    }, [data])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await getArticleData();
    //             console.log(data)
    //             if (data) {
    //                 const finalData = data.data.map((item: DataType) => ({
    //                     ...item,
    //                     key: item.id
    //                 }))
    //                 setTableData(finalData)
    //             }
    //         } catch (error) {
    //             console.log("Error fetching article data:", error);
    //         }
    //     };

    //     fetchData();

    // }, [])

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

            <DraggableTable
                columns={columns}
                dataSource={data}
            ></DraggableTable>
            <ArticleUpdateDrawer />
            <ArticleDeleteModal formData={id} />
            <ArticleCreateDrawer />
        </div>

    )
}
export default Article;
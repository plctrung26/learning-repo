import { TableColumnsType } from "antd";
import { ArticleData } from "../../types/article/ArticleDataType";
import { useEffect, useState } from "react";
import DraggableTable from "../../components/CustomTable/DraggableTable";
import { formatDate } from "../../utils/formatDate";
import ArticleDrawer from "./container/ArticleDrawer";
import { Provider } from "react-redux";
import articleStore from "../../redux/articleStore/articleStore";
import React from "react";
import ArticleButtonGroup from "./container/ArticleButtonGroup";
import { getArticleData } from "../../apis/article/articleApi";

interface DataType extends ArticleData {
    key: React.Key;
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
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getArticleData();
                console.log(data)
                if (data) {
                    const finalData = data.data.map((item: DataType) => ({
                        ...item,
                        key: item.id
                    }))
                    setTableData(finalData)
                }

            } catch (error) {
                console.log("Error fetching article data:", error);
            }
        };

        fetchData();

    }, [])

    return (
        <Provider store={articleStore}>
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
                    dataSource={tableData}
                ></DraggableTable>
                <ArticleDrawer />


            </div>
        </Provider>

    )
}
export default Article;
import { TableColumnsType } from "antd";
import { ArticleDataType } from "../../types/article/ArticleDataType";
import { useEffect, useState } from "react";
import DraggableTable from "../../components/CustomTable/DraggableTable";
import { formatDate } from "../../utils/formatDate";
import ArticleUpdateDrawer from "./container/ArticleUpdateDrawer";
import React from "react";
import ArticleButtonGroup from "./container/ArticleButtonGroup";
import useTableData from "../../hooks/articleHooks/useTableData";
import ArticleDeleteModal from "./container/ArticleDeleteModal";
import ArticleCreateDrawer from "./container/ArticleCreateDrawer";
import useArticleStore from "../../store/article/useArticleStore";
import { filterData } from "../../utils/filterData";
import ArticleDraggableTable from "./container/ArticleDraggableTable";

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
    const { data } = useTableData();
    const [filteredData, setFilteredData] = useState<any>(data)
    const { queryString, isChangeIndex, isCancelChangeIndex, setIsChangeIndex, setIsCancelChangeIndex } = useArticleStore();
    const id = useArticleStore((state) => state.id)

    useEffect(() => {
        if (data) {
            setFilteredData(filterData(data, queryString));
        }
    }, [queryString, data]);

    useEffect(() => setFilteredData(data), [data])

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

            {/* <DraggableTable
                onChangeIndex={setIsChangeIndex}
                onCancel={setIsCancelChangeIndex}
                isChangeIndex={isChangeIndex}
                isCancelChangeIndex={isCancelChangeIndex}
                columns={columns}
                dataSource={filteredData}
            ></DraggableTable> */}
            <ArticleDraggableTable data={filteredData} columns={columns}></ArticleDraggableTable>
            <ArticleUpdateDrawer />
            <ArticleDeleteModal formData={id} />
            <ArticleCreateDrawer />
        </div>

    )
}
export default Article;
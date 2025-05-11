import { useEffect } from "react";
import DraggableTable from "../../../components/CustomTable/DraggableTable"
import useArticleStore from "../../../store/article/useArticleStore";
import useChangeIndex from "../../../hooks/articleHooks/useChangeIndex";
import useTableData from "../../../hooks/articleHooks/useTableData";
import { ArticleDataType } from "../../../types/article/ArticleDataType";
import { TableColumnsType } from "antd";
import { formatDate } from "../../../utils/formatDate";
import { getStatusBadgeColor } from "../../../utils/getStatusBadgeColor";
import CustomBadge from "../../../components/CustomBadge/CustomBadge";
import ArticleButtonGroup from "./ArticleButtonGroup";

interface TableDataType extends ArticleDataType {
    key: React.Key;
    index: number
}

const articleColumns: TableColumnsType<TableDataType> = [
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

const ArticleDraggableTable = () => {
    const { queryString, isChangeIndex, isCancelChangeIndex, setIsChangeIndex, setIsCancelChangeIndex, setIsOutdated } = useArticleStore();
    const { mutate } = useChangeIndex()
    const { data, refetchTable } = useTableData({ search: queryString })

    useEffect(() => {
        refetchTable()

    }, [queryString]);

    useEffect(() => {
        if (isChangeIndex === true) {
            setIsOutdated(true)
        }
    }, [isChangeIndex])

    return (
        <DraggableTable
            onChangeIndex={setIsChangeIndex}
            onCancel={setIsCancelChangeIndex}
            isChangeIndex={isChangeIndex}
            isCancelChangeIndex={isCancelChangeIndex}
            updateFunction={mutate}
            columns={articleColumns}
            dataSource={data}
        />

    )
}

export default ArticleDraggableTable
import { TableColumnsType } from "antd";
import { ArticleData } from "../../types/article/ArticleDataType";
import axios from "axios";
import { useEffect, useState } from "react";
import DraggableTable from "../../components/CustomTable/DraggableTable";
import { formatDate } from "../../utils/formatDate";
import ArticleDrawer from "./container/ArticleDrawer";
import { Provider } from "react-redux";
import articleStore from "../../redux/articleStore/articleStore";
import React from "react";
import ArticleButtonGroup from "./container/ArticleButtonGroup";

interface dataType extends ArticleData {
    key: React.Key;
}

const columns: TableColumnsType<dataType> = [
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

    const fetchData = async (): Promise<dataType[] | any> => {
        try {
            const response = await axios.get<dataType[]>("https://dev-api-nurture.vinova.sg/api/v1/admins/articles", {
                params: {
                    page: 1,
                    limit: 25
                },
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
                }
            });
            console.log('Success')
            return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
            return error;
        }
    };

    useEffect(() => {
        fetchData().then((data) => {
            const testdata = data.data.map((item: dataType) => ({
                ...item,
                key: item.id
            }))
            setTableData(testdata)
        });
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
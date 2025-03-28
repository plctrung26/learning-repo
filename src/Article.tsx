import { TableColumnsType } from "antd";
import ArticleButtonGroup from "./components/ButtonGroup/ArticleButtonGroup";
import { ArticleData } from "./DataTypes/ArticleDataType";
import axios from "axios";
import { useEffect, useState } from "react";
import DraggableTable from "./components/CustomTable/DraggableTable";
import { formatDate } from "./Utilities/formatDate";
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
        render: () => <ArticleButtonGroup />,
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

        </div>
    )
}
export default Article;
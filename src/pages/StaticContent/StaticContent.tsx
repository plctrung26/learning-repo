import { TableColumnsType, TableProps } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import StaticContentButtonGroup from "./container/StaticContentButtonGroup";
import CustomTable from "../../components/CustomTable/CustomTable";

interface StaticContentData {
    key: React.Key;
    id: string;
    slug: string;
    category: string;
    isRequired: boolean;
    title: string;
    status: string;
}

const columns: TableColumnsType<StaticContentData> = [
    {
        title: 'Slug',
        dataIndex: 'slug',
        sorter: (a, b) => a.slug.localeCompare(b.slug),
    },
    {
        title: 'Category',
        dataIndex: 'category',
        sorter: (a, b) => a.category.localeCompare(b.category),
    },
    {
        title: 'Required',
        dataIndex: 'required',
        sorter: (a, b) => Number(a.isRequired) - Number(b.isRequired),
        render: (isRequired) => (isRequired ? 'Yes' : 'No')
    },
    {
        title: 'Title',
        dataIndex: 'title',
        sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
        title: 'Status',
        dataIndex: 'status',
        sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        width: 120,
        fixed: "right",
        render: () => <StaticContentButtonGroup />,
    },
];


const onChange: TableProps<StaticContentData>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};



const StaticContent = () => {
    const [data, setData] = useState([])

    const fetchData = async (): Promise<StaticContentData[] | any> => {
        try {
            const response = await axios.get<StaticContentData[]>("https://dev-api-nurture.vinova.sg/api/v1/admins/static-content", {
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
            console.log("Error fetching data:", error);
            return error;
        }
    };

    useEffect(() => {
        fetchData().then((data) => {
            const testdata = data.data.map((item: StaticContentData) => ({
                ...item,
                key: item.id
            }))
            console.log(testdata)
            setData(testdata)
        });
    }, [])

    return (
        <div style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            backgroundColor: '#F7F8F9',
            boxSizing: 'border-box'
        }}>
            <CustomTable
                columns={columns}
                dataSource={data}
                onChange={onChange}
            ></CustomTable>
        </div>
    )

}

export default StaticContent
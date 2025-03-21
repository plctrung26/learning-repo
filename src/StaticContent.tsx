import { TableColumnsType, TableProps } from "antd";
import CustomTable from "./components/CustomTable/CustomTable"
import React, { useEffect } from "react";
import axios from "axios";

interface StaticContentData {
    key: React.Key;
    slug: string;
    category: string;
    required: string;
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
        sorter: (a, b) => a.required.localeCompare(b.required),
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
        fixed: "right", // Freeze this column to the right
        render: () => <button>Edit</button>,
    },
];

const data: StaticContentData[] = [{
    key: "1", // Assuming React.Key can be a string or number
    slug: "example-slug",
    category: "Tech",
    required: "Yes",
    title: "Understanding TypeScript",
    status: "Published"
}];

const onChange: TableProps<StaticContentData>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};



const StaticContent = () => {

    const fetchData = async (): Promise<StaticContentData[] | any> => {
        try {
            const response = await axios.get<StaticContentData[]>("https://dev-api-nurture.vinova.sg/api/v1/admins/static-content", {
                params: {
                    page: 1,
                    limit: 25
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
            console.log(data);
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
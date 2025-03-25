import { TableColumnsType, TableProps } from "antd";
import DraggableTable from "./components/CustomTable/DraggableTable";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    index: number;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },

    },
    {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        width: 120,
        fixed: "right",
        render: () => <ButtonGroup isDelete={true} isEdit={true} isDetail={true} useModel={false} />,
    },
];

const data = [
    {
        key: 'key_1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        index: 1
    },
    {
        key: 'key_2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        index: 2
    },
    {
        key: 'key_3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        index: 3
    },
    {
        key: 'key_4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
        index: 4
    },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const Article = () => {
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
                onChange={onChange}

            ></DraggableTable>

        </div>
    )
}
export default Article;
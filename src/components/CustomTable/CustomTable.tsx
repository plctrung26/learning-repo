import { Table } from 'antd';
import type { TableProps } from 'antd';
import './CustomTable.scss'

const onChange: TableProps['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const CustomTable = <Record extends object>(props: TableProps<Record>) => {
    return (
        <div className='table-container'>
            <Table<Record>
                className='custom-table'
                bordered
                showSorterTooltip={{ target: 'sorter-icon' }}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default CustomTable;
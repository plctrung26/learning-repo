import { Table } from 'antd';
import type { TableProps } from 'antd';
import './CustomTable.scss'


const CustomTable = <Record extends object>(props: TableProps<Record>) => {
    return (
        <div className='table-container'>
            <Table<Record>
                {...props}
                className='table'
                bordered
                showSorterTooltip={{ target: 'sorter-icon' }}
                pagination={{
                    showSizeChanger: true,
                    pageSize: 15,
                    showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`
                }}
            />
        </div>
    )
}

export default CustomTable;
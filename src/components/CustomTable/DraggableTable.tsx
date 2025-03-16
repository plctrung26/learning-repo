import { Table } from 'antd';
import type { TableProps } from 'antd';
import './DraggableTable.scss';
import { useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableRow from './DraggableRow';

const DraggableTable = <RecordType extends object & { key: React.Key }>(props: TableProps<RecordType>) => {
    const [data, setData] = useState<RecordType[]>([...(props.dataSource || [])]);

    const moveRow = useCallback((fromIndex: number, toIndex: number) => {
        setData((prevData) => {
            const newData = [...prevData]; // Create a new array to prevent mutation
            console.log(newData)
            const movedItem = newData.splice(fromIndex, 1)[0]; // Remove the item
            newData.splice(toIndex, 0, movedItem); // Insert at new position
            return newData; // Update state
        });
    }, []);

    return (
        <div className='table-container'>
            <DndProvider backend={HTML5Backend}>
                <Table<RecordType>
                    {...props}
                    className='table'
                    dataSource={data}
                    bordered
                    showSorterTooltip={{ target: 'sorter-icon' }}
                    pagination={false}
                    components={{
                        body: {
                            row: (rowProps) => {
                                const index = data.findIndex((item) => item.key === rowProps['data-row-key']);
                                return <DraggableRow {...rowProps} index={index} moveRow={moveRow} />;
                            },
                        },
                    }}
                />
            </DndProvider>
        </div>
    );
};

export default DraggableTable;

import { Table } from 'antd';
import type { TableProps } from 'antd';
import './DraggableTable.scss';
import { useCallback, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableRow from './DraggableRow';
import React from 'react';

const DraggableTable = <RecordType extends object & { key: React.Key }>(props: TableProps<RecordType>) => {
    const [data, setData] = useState<RecordType[]>([...(props.dataSource || [])]);

    useEffect(() => {
        if (props.dataSource) {
            setData([...props.dataSource])
        }
    }, [props.dataSource])

    const moveRow = useCallback((fromIndex: number, toIndex: number) => {
        setData((prevData) => {
            const newData = [...prevData];
            console.log(newData)
            const movedItem = newData.splice(fromIndex, 1)[0];
            newData.splice(toIndex, 0, movedItem);
            return newData;
        });
    }, []);

    return (
        <div className='table-container'>
            <DndProvider backend={HTML5Backend}>
                <Table<RecordType>
                    {...props}
                    className='draggable-table'
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

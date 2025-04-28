import { Button, Table } from 'antd';
import type { TableProps } from 'antd';
import './DraggableTable.scss';
import { useCallback, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableRow from './DraggableRow';
import { checkDnD } from '../../utils/checkDnD';
// import useChangeIndex from '../../hooks/articleHooks/useChangeIndex';

interface DraggableTableProps<RecordType> extends TableProps<RecordType> {
    onChangeIndex: (isChangeIndex: boolean) => void;
    onCancel: (isCancelChangeIndex: boolean) => void;
    updateFunction: (data: any) => void
    isChangeIndex: boolean;
    isCancelChangeIndex: boolean;
}

const DraggableTable = <RecordType extends { key: React.Key, id: string; index: number }>({
    onChangeIndex,
    onCancel,
    updateFunction,
    isChangeIndex,
    isCancelChangeIndex,
    ...props
}: DraggableTableProps<RecordType>) => {
    const [originalData, setOriginalData] = useState<RecordType[]>([...(props.dataSource || [])]);
    const [data, setData] = useState<RecordType[]>([...(props.dataSource || [])]);
    useEffect(() => {
        if (props.dataSource) {
            setData([...props.dataSource])
            setOriginalData([...props.dataSource])
        }
    }, [props.dataSource])


    useEffect(() => {
        if (isCancelChangeIndex === true) {
            setData([...originalData])
            onCancel(false)
        }
    }, [isCancelChangeIndex])

    useEffect(() => {
        if (isChangeIndex === true) {
            onChangeIndex(false)
            updateFunction(data)
            setOriginalData(data)
        }
    }, [isChangeIndex, data, updateFunction]);

    const moveRow = useCallback((fromIndex: number, toIndex: number) => {
        setData((prevData) => {
            const newData = [...prevData];
            const movedItem = newData.splice(fromIndex, 1)[0];
            newData.splice(toIndex, 0, movedItem);
            const updatedData = newData.map((item, i) => ({
                ...item,
                index: i,
            }));
            return updatedData;
        });
    }, []);

    return (
        <div className='table-container'>
            <div className='update-zone'>
                <div className='update-title'>
                    Drag and drop to rearrange, then click 'Save' to apply changes.
                </div>
                <div className='button-zone'>
                    <Button className='cancel' disabled={!checkDnD(originalData, data)} onClick={() => onCancel(true)}>Cancel</Button>
                    <Button className='save' disabled={!checkDnD(originalData, data)} onClick={() => onChangeIndex(true)}>Save</Button>
                </div>
            </div>
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

import { useEffect, useState } from "react";
import DraggableTable from "../../../components/CustomTable/DraggableTable"
import useArticleStore from "../../../store/article/useArticleStore";
import { filterData } from "../../../utils/filterData";
import useChangeIndex from "../../../hooks/articleHooks/useChangeIndex";

type Props = {
    data: any;
    columns: any;
};

const ArticleDraggableTable = ({ data, columns }: Props) => {
    const [filteredData, setFilteredData] = useState<any>(data)
    const { queryString, isChangeIndex, isCancelChangeIndex, setIsChangeIndex, setIsCancelChangeIndex } = useArticleStore();
    const [originalData, setOriginalData] = useState<any>([]);
    const { mutate } = useChangeIndex()

    useEffect(() => {
        if (data) {
            setOriginalData([...data])
        }
    }, [data])


    useEffect(() => {
        if (isCancelChangeIndex === true) {
            setIsCancelChangeIndex(false)
        }
    }, [isCancelChangeIndex])

    useEffect(() => {
        if (isChangeIndex === true) {
            mutate(data)
            setIsChangeIndex(false)
        }
    }, [isChangeIndex, data, mutate]);

    useEffect(() => {
        if (data) {
            setFilteredData(filterData(data, queryString));

        }
    }, [queryString, data]);

    useEffect(() => setFilteredData(data), [data])
    return (
        <DraggableTable
            onChangeIndex={() => { }}
            onCancel={() => { }}
            isChangeIndex={false}
            isCancelChangeIndex={false}
            columns={columns}
            dataSource={filteredData}
        />
    )
}

export default ArticleDraggableTable
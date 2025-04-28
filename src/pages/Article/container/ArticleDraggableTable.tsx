import { useEffect, useState } from "react";
import DraggableTable from "../../../components/CustomTable/DraggableTable"
import useArticleStore from "../../../store/article/useArticleStore";
import { filterData } from "../../../utils/filterData";
import useChangeIndex from "../../../hooks/articleHooks/useChangeIndex";
import useTableData from "../../../hooks/articleHooks/useTableData";

type ArticleTableProps = {
    data: any;
    columns: any;
};

const ArticleDraggableTable = ({ data, columns }: ArticleTableProps) => {
    const [filteredData, setFilteredData] = useState<any>(data)
    const { queryString, isChangeIndex, isCancelChangeIndex, setIsChangeIndex, setIsCancelChangeIndex, setIsOutdated } = useArticleStore();
    const { mutate } = useChangeIndex()
    const { refetchTable } = useTableData()

    useEffect(() => {
        if (data) {
            refetchTable()
            setFilteredData(filterData(data, queryString));
        }
    }, [queryString, data]);

    useEffect(() => {
        if (queryString !== "") {
            setFilteredData(filterData(data, queryString));
        }
    }, [data])

    useEffect(() => {
        if (isChangeIndex === true) {
            setIsOutdated(true)
        }
    }, [isChangeIndex])

    useEffect(() => setFilteredData(data), [data])
    return (
        <DraggableTable
            onChangeIndex={setIsChangeIndex}
            onCancel={setIsCancelChangeIndex}
            isChangeIndex={isChangeIndex}
            isCancelChangeIndex={isCancelChangeIndex}
            updateFunction={mutate}
            columns={columns}
            dataSource={filteredData}
        />

    )
}

export default ArticleDraggableTable
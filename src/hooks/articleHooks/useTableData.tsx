import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getArticleData } from "../../apis/article/articleApi"
import { ArticleDataType } from "../../types/article/ArticleDataType";

interface DataType extends ArticleDataType {
    key: React.Key;
    index: number
}


const fetchData = async (params: any) => {
    try {
        const res = await getArticleData(params)
        let finalData: DataType[] = []
        if (res.data) {
            finalData = res.data.map((item: DataType) => ({
                ...item,
                key: item.id
            }))
        }
        return finalData
    } catch (err) {
        console.log("Failed", err)
    }
}

const useTableData = (params: any) => {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ['articleTable', params],
        queryFn: () => fetchData(params)
    })

    const refetchTable = () => {
        queryClient.invalidateQueries({ queryKey: ['articleTable'] });
    }

    return {
        ...query,
        refetchTable
    };
}
export default useTableData;
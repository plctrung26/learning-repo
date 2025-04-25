import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getAllCategory } from "../../apis/category/categoryApi"
import { CategoryDataType } from "../../types/category/CategoryDataType";

interface ReturnDataType extends CategoryDataType {
    value?: string,
    label?: string,
}

const getAll = async () => {
    try {
        const res = await getAllCategory()
        let finalData: ReturnDataType[] = [];
        if (res) {
            finalData = res.map((item: ReturnDataType) => ({
                value: item.id,
                label: item.name
            }))
        }
        return finalData
    } catch (err) {
        console.error(err)
    }
}

const useCategoryData = () => {
    const queryClient = useQueryClient();
    const query = useQuery({
        queryKey: ['articleCategoryData'],
        queryFn: getAll
    })

    const refetchCategory = () => {
        queryClient.invalidateQueries({ queryKey: ['articleCategoryData'] })
    }

    return {
        ...query,
        refetchCategory
    }
}

export default useCategoryData
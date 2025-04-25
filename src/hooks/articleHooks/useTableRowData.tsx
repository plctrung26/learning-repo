import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getArticleRowData, updateArticleData } from "../../apis/article/articleApi"

const fetchData = async (id: string) => {
    try {
        const res = await getArticleRowData({ id: id })
        return res
    } catch (err) {
        console.error("Failed", err)
    }
}

const updateData = async ({ id, data }: { id: string; data: any }) => {
    try {
        const res = await updateArticleData({ id, data });
        return res;
    } catch (err) {
        console.error("Failed to update article", err);
        throw err;
    }
};


const useTableRowData = (id: string) => {
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: ['articleTableRow', id],
        queryFn: () => fetchData(id),
        enabled: !!id
    })

    const mutation = useMutation({
        mutationFn: (updatedData: { id: string; data: any }) => updateData(updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['articleTableRow', id] });
            queryClient.invalidateQueries({ queryKey: ['articleTable'] });

        }
    })
    return {
        ...query,
        updateArticle: mutation.mutate,
        updateError: mutation.error
    };
}

export default useTableRowData
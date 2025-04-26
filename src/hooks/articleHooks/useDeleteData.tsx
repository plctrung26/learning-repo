
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteArticleData } from "../../apis/article/articleApi"

const deleteData = async (id: string) => {
    try {
        const res = await deleteArticleData({ ids: [id] })
        console.log("Success: ", res)
    } catch (err) {
        console.error(err)
    }
}

const useDeleteData = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: string) => deleteData(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['articleTable'] });
        }
    })
}

export default useDeleteData;
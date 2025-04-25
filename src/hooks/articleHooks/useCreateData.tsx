import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createArticleData } from "../../apis/article/articleApi"
import { ArticleDataType } from "../../types/article/ArticleDataType"

const createArticle = async (data: ArticleDataType) => {
    try {

        const res = await createArticleData({ newData: data })
        return (res)
    } catch (err) {
        console.log(err)
    }
}

const useCreateData = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: ArticleDataType) => createArticle(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['articleTable'] });
        }
    });
}

export default useCreateData
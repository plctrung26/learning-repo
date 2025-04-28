import { useMutation } from "@tanstack/react-query";
import { changeIndex } from "../../apis/article/articleApi";


const changeArticleIndex = async (data: any) => {
    try {
        const sendData: { id: string, index: number }[] = data.map((item: any) => ({
            id: item.id,
            index: item.index
        }))
        const res = await changeIndex({ articles: sendData });
        return (res)
    } catch (err) {
        console.error(err)
    }
}

const useChangeIndex = () => {
    // const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => changeArticleIndex(data),
        onSuccess: () => {
            console.log("success")
        }
    })
}

export default useChangeIndex
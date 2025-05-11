import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAdmin } from "../../../apis/account/adminApi"

const createUser = async (data: any) => {
    try {
        if (data) {
            const finalData = {
                ...data,
                picture: ""
            }
            const res = await createAdmin(finalData)
            console.log(res)
            return res
        }
    } catch (err) {
        console.error(err)
    }
}

const useCreateAdmin = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: any) => createUser(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['adminTable'] })
        }
    })
}

export default useCreateAdmin
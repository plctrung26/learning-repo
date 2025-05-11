import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getAdminById, updateAdminById } from "../../../apis/account/adminApi"

const fetchRowData = async (id: string) => {
    try {
        if (id) {
            const res = await getAdminById(id)
            return res?.data
        }

    } catch (err) {
        console.error(err)
    }
}

const updateAdmin = async ({ id, data }: { id: string; data: any }) => {
    try {
        const res = await updateAdminById({ id, data });
        console.log("Updated successfully")
        return res;
    } catch (err) {
        console.error("Failed to update article", err);
        throw err;
    }
}

const useAdminRowData = (id: string) => {
    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ["adminTableRow", id],
        queryFn: () => fetchRowData(id),
        enabled: !!id
    })
    const mutation = useMutation({
        mutationFn: (updatedData: { id: string; data: any }) => updateAdmin(updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['adminTableRow', id] });
            queryClient.invalidateQueries({ queryKey: ['adminTable'] });

        }
    })
    return {
        ...query,
        updateAdmin: mutation.mutate
    }
}

export default useAdminRowData
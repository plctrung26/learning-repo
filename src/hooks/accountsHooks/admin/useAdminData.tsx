import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllAdmin } from "../../../apis/account/adminApi";
import { AdminDataType } from "../../../types/account/admin/AdminDataType";

const fetchData = async (params: any) => {
    try {
        const res = await getAllAdmin(params)
        if (res?.data) {
            const finalData: AdminDataType[] = res.data.map((item: AdminDataType) => ({
                id: item.id,
                key: item.id,
                username: item.username,
                firstName: item.firstName,
                lastName: item.lastName,
                role: item.role,
                status: item.status,
                email: item.email,
            }))
            return {
                metadata: res.metadata,
                formattedData: finalData
            };
        }
    } catch (err) {
        console.log(err)
    }
}

const useAdminData = (params: any) => {
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: ['adminTable', params],
        queryFn: () => fetchData(params)
    })

    const refetchTable = () => {
        queryClient.invalidateQueries({ queryKey: ['adminTable', params] });
    }

    return {
        ...query,
        data: query.data?.formattedData,
        metadata: query.data?.metadata,
        refetchTable
    };
}

export default useAdminData
import { AdminDataType } from "../../types/account/admin/AdminDataType";
import instance from "../apiConfig"

interface AdminResponse {
    data: AdminDataType[];
    metadata: any;
    message: string;
}

const getAllAdmin = async (params: any): Promise<AdminResponse> => {
    return await instance.get("admins/admins", {
        params: params,
    });
};

const getAdminById = async (id: string) => {
    const res = await instance.get(`admins/admins/${id}`)
    return res
}

const updateAdminById = async ({ id, data }: { id: string, data: any }) => {
    const res = await instance.put(`admins/admins/${id}`, data)
    return res
}

const createAdmin = async (data: any) => {
    const res = await instance.post("admins/admins", data)
    return res
}

const deleteAdminById = async (id: string) => {
    return await instance.delete(`admins/admins/${id}`)
}

export { getAllAdmin, getAdminById, updateAdminById, createAdmin, deleteAdminById }
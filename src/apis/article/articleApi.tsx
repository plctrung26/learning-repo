import { ArticleDataType } from "../../types/article/ArticleDataType";
import instance from "../apiConfig";

const getArticleData = async (): Promise<ArticleDataType[] | any> => {
    try {
        const response = await instance.get("admins/articles", {
            params: {
                page: 1,
                limit: 25
            }
        })
        return response
    } catch (error) {
        console.log("Failed to get data: ", error)
    }
}

const getArticleRowData = async ({ id }: { id: string }): Promise<ArticleDataType | any> => {
    try {
        const response = await instance.get(`admins/articles/${id}`)
        return response.data
    } catch (error) {
        console.log("Error fetching data:", error);
        return error;
    }
}

const updateArticleData = async ({ id, data }: { id: string, data: ArticleDataType }) => {
    try {
        console.log(data, id)
        const response = await instance.put(`admins/articles/${id}`, data)
        return response
    } catch (error) {
        console.log("Failed to update data due to this error:", error);
        return error;
    }
}

const deleteArticleData = async ({ ids }: { ids: string[] }) => {
    try {
        console.log(ids)
        const response = await instance.delete(`admins/articles/`, {
            data: {
                ids: ids
            }
        })
        return response
    } catch (error) {
        console.log("Failed to delete data due to this error:", error);
    }
}

const createArticleData = async ({ newData }: { newData: ArticleDataType }) => {
    try {
        const res = await instance.post("admins/articles", newData)
        console.log(res)
        return res
    } catch (err) {
        console.log(err)
    }
}

export { createArticleData, getArticleRowData, getArticleData, updateArticleData, deleteArticleData }
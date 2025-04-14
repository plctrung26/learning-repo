import { ArticleData } from "../../types/article/ArticleDataType";
import instance from "../apiConfig";

const getArticleData = async (): Promise<ArticleData[] | any> => {
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

const getArticleRowData = async ({ id }: { id: string }): Promise<ArticleData | any> => {
    try {
        const response = await instance.get(`admins/articles/${id}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("Error fetching data:", error);
        return error;
    }
}

const updateArticleData = async ({ id, data }: { id: string, data: ArticleData }) => {
    try {
        const response = await instance.put(`admins/articles/${id}`, data)
        return response
    } catch (error) {
        console.log("Failed to update data due to this error:", error);
        return error;
    }
}

const deleteArticleData = async ({ ids }: { ids: string[] }) => {
    try {
        const response = await instance.delete(`admins/articles/${ids}`)
        return response
    } catch (error) {
        console.log("Failed to delete data due to this error:", error);
    }
}

export { getArticleRowData, getArticleData, updateArticleData, deleteArticleData }
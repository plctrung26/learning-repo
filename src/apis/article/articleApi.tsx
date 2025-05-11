import { ArticleDataType } from "../../types/article/ArticleDataType";
import instance from "../apiConfig";

const getArticleData = async (params: any): Promise<ArticleDataType[] | any> => {
    const response = await instance.get("admins/articles", {
        params: params
    })
    return response
}

const getArticleRowData = async ({ id }: { id: string }): Promise<ArticleDataType | any> => {
    const response = await instance.get(`admins/articles/${id}`)
    return response.data
}

const updateArticleData = async ({ id, data }: { id: string, data: ArticleDataType }) => {
    const response = await instance.put(`admins/articles/${id}`, data)
    return response
}

const deleteArticleData = async ({ ids }: { ids: string[] }) => {
    const response = await instance.delete(`admins/articles/`, {
        data: {
            ids: ids
        }
    })
    return response
}

const createArticleData = async ({ newData }: { newData: ArticleDataType }) => {
    const res = await instance.post("admins/articles", newData)
    return res
}

const changeIndex = async (data: { "articles": { id: string, index: number }[] }) => {
    const res = await instance.put("admins/articles/index", data)
    return res
}

export { createArticleData, getArticleRowData, getArticleData, updateArticleData, deleteArticleData, changeIndex }
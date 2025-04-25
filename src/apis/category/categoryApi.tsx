import { CategoryDataType } from "../../types/category/CategoryDataType"
import instance from "../apiConfig"

const createCategory = async ({ data }: { data: CategoryDataType }) => {

    try {
        const res = await instance.post("admins/categories", data)

        console.log(res)
    } catch (err) {
        console.log(data)
        console.error(err)
    }
}

const getAllCategory = async () => {

    try {
        const res = await instance.get("admins/categories", {
            params: {
                page: 1,
                limit: 25
            }
        })
        return res.data
    } catch (err) {
        console.error(err)
    }
}

export { createCategory, getAllCategory }
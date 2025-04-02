import { Form, Input } from "antd";
import CustomDrawer from "./CustomDrawer";
import CustomInput from "../FormComponents/CustomInput";
import CustomSelect from "../FormComponents/CustomSelect";
import CustomUpload from "../FormComponents/CustomUpload";
import CustomTextEditor from "../FormComponents/CustomTextEditor";
import { ArticleData } from "../../DataTypes/ArticleDataType";
import { useEffect, useState } from "react";
import axios from "axios";
// import { title } from "process";

// const defaultValue: ArticleData = {
//     id: "",
//     title: "Helllooooo",
//     author: "",
//     status: "",
//     category: {
//         id: "",
//         name: ""
//     },
//     timeToRead: 0,
//     picture: {
//         uri: "https://s3.ap-southeast-1.amazonaws.com/nurturewave-be-dev/uploads%2Fimages%2F0b8821d6-1a35-4986-af30-232f74a04b51_download+(2).jpeg",
//         types: "image/jpeg",
//         createdAt: new Date().toISOString(),
//     },
//     content: ""
// };

// const extractValidData = (defaultObj: ArticleData, receivedObj: ArticleData | undefined): ArticleData => {
//     return {
//         id: receivedObj?.id ?? defaultObj.id,
//         title: receivedObj?.title ?? defaultObj.title,
//         author: receivedObj?.author ?? defaultObj.author,
//         status: receivedObj?.status ?? defaultObj.status,
//         timeToRead: receivedObj?.timeToRead ?? defaultObj.timeToRead,
//         content: receivedObj?.content ?? defaultObj.content,
//         category: {
//             id: receivedObj?.category?.id ?? defaultObj.category?.id,
//             name: receivedObj?.category?.name ?? defaultObj.category?.name
//         },
//         picture: {
//             uri: receivedObj?.picture?.uri ?? defaultObj.picture?.uri,
//             types: receivedObj?.picture?.types ?? defaultObj.picture?.types,
//             createdAt: receivedObj?.picture?.createdAt ?? defaultObj.picture?.createdAt
//         }
//     };
// };
const id = "56c25d14-1838-4f5d-8805-c61113bdf1b0"
const ArticleDrawer = () => {
    const [form] = Form.useForm();
    const [currentData, setCurrentData] = useState<ArticleData | undefined>({

    })
    const fetchData = async (): Promise<ArticleData | any> => {
        try {
            const response = await axios.get<ArticleData>(`https://dev-api-nurture.vinova.sg/api/v1/admins/articles/${id}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
                }
            });
            console.log('Success')
            return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
            return error;
        }
    };

    useEffect(() => {
        fetchData().then(res => {
            setCurrentData(res.data)
        })
    }, []);

    useEffect(() => {
        if (!currentData) return
        const fakeTitle = "I am Fake"
        console.log(currentData)
        const test = {
            id: "",
            title: currentData.title,
            author: "sddfsdffd",
            status: currentData?.status,
            category: {
                id: "",
                name: ""
            },
            timeToRead: 0,
            picture: {
                uri: "https://s3.ap-southeast-1.amazonaws.com/nurturewave-be-dev/uploads%2Fimages%2F0b8821d6-1a35-4986-af30-232f74a04b51_download+(2).jpeg",
                types: "image/jpeg",
                createdAt: new Date().toISOString(),
            },
            content: ""
        }

        console.log("test", test)
        form.setFieldsValue({ title: test.title })
        const test2 = form.getFieldsValue()
        console.log(test2)

    }, [currentData])

    return (
        <CustomDrawer>
            <Form form={form} layout="vertical" >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <Input placeholder="Title" />
                </Form.Item>
                <Form.Item
                    label="Author"
                    name="author"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <CustomInput placeholder="Author" />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <CustomSelect />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="category.id"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <CustomSelect />
                </Form.Item>
                <Form.Item
                    label="Duration (Ex: 3 mins)"
                    name="timeToRead"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <CustomSelect />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <CustomUpload />
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <CustomTextEditor />
                </Form.Item>
            </Form>
        </CustomDrawer>
    );
};

export default ArticleDrawer;

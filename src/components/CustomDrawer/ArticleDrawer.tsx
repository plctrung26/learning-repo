import { Form, Input } from "antd";
import CustomDrawer from "./CustomDrawer";
import CustomInput from "../FormComponents/CustomInput";
import CustomSelect from "../FormComponents/CustomSelect";
import CustomUpload from "../FormComponents/CustomUpload";
import CustomTextEditor from "../FormComponents/CustomTextEditor";
import { ArticleData } from "../../DataTypes/ArticleDataType";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/articleStore/articleStore";

const ArticleDrawer = () => {
    const [form] = Form.useForm();
    const [currentData, setCurrentData] = useState<ArticleData | undefined>()
    const id = useSelector((state: RootState) => state.drawer.id)
    const isOpen = useSelector((state: RootState) => state.drawer.isArticleDrawerOpen)

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
        console.log("HHEHEHEHEHHE")
        fetchData().then(res => {
            setCurrentData(res.data)
        })
    }, [id]);

    useEffect(() => {
        if (!currentData) return
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
        form.setFieldsValue(test )
        const test2 = form.getFieldsValue()
        console.log(test2)

    }, [currentData])

    return (
        <CustomDrawer open={isOpen}>
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

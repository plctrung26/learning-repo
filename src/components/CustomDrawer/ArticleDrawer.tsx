import { Form, Input } from "antd";
import CustomDrawer from "./CustomDrawer";
import CustomInput from "../FormComponents/CustomInput";
import CustomSelect from "../FormComponents/CustomSelect";
import CustomUpload from "../FormComponents/CustomUpload";
import CustomTextEditor from "../FormComponents/CustomTextEditor";
import { ArticleData } from "../../DataTypes/ArticleDataType";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/articleStore/articleStore";
import { closeArticleDrawer } from "../../redux/articleStore/articleDrawerSlice";

const ArticleDrawer = () => {
    const [form] = Form.useForm();
    const [currentData, setCurrentData] = useState<ArticleData | undefined>()
    const id = useSelector((state: RootState) => state.drawer.id)
    const isOpen = useSelector((state: RootState) => state.drawer.isArticleDrawerOpen)
    const contentValue = Form.useWatch("content", form);
    const dispatch = useDispatch()

    const fetchData = async (): Promise<ArticleData | any> => {
        try {
            const response = await axios.get<ArticleData>(`https://dev-api-nurture.vinova.sg/api/v1/admins/articles/${id}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
                }
            });
            // console.log('Success')
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
    }, [id]);

    useEffect(() => {
        if (!currentData) return
        const test = {
            id: currentData.id,
            title: currentData.title,
            author: currentData.author,
            status: currentData?.status,
            category: currentData.category?.name,
            timeToRead: currentData.timeToRead,
            picture: {
                uri: currentData.picture?.uri || null,
                types: "image/jpeg",
                createdAt: currentData.picture?.createdAt,
            },
            content: currentData.content
        }
        form.setFieldsValue(test)
    }, [currentData])

    return (
        <CustomDrawer open={isOpen} onClose={() => {
            form.resetFields();
            setCurrentData(undefined);
            dispatch(closeArticleDrawer())
        }}>
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
                    name="category"
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
                    name="picture"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <CustomUpload />
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <CustomTextEditor text={contentValue} />
                </Form.Item>
            </Form>
        </CustomDrawer>
    );
};

export default ArticleDrawer;

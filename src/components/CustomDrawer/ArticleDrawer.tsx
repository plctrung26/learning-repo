import { Form } from "antd";
import CustomDrawer from "./CustomDrawer";
import CustomInput from "../FormComponents/CustomInput";
import CustomSelect from "../FormComponents/CustomSelect";
import CustomUpload from "../FormComponents/CustomUpload";
import CustomTextEditor from "../FormComponents/CustomTextEditor";
import { ArticleData } from "../../DataTypes/ArticleDataType";
import { useEffect, useState } from "react";

const defaultValue: ArticleData = {
    id: "",
    title: "Helllooooo",
    author: "",
    status: "",
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
    content: <p></p>
};

const ArticleDrawer = ({ data = defaultValue }: { data?: ArticleData }) => {
    const [form] = Form.useForm();
    const [formReady, setFormReady] = useState(false)

    useEffect(() => {
        setFormReady(true)
    }, [])

    useEffect(() => {
        form.setFieldsValue(data)
    }, [data, formReady, form])

    return (
        <CustomDrawer>
            <Form form={form} layout="vertical" >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <CustomInput placeholder="Title" />
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

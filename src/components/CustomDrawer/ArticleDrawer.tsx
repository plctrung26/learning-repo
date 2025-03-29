import { Form } from "antd";
import CustomDrawer from "./CustomDrawer"
import CustomInput from "../FormComponents/CustomInput";
import CustomSelect from "../FormComponents/CustomSelect";
import CustomUpload from "../FormComponents/CustomUpload";
import CustomTextEditor from "../FormComponents/CustomTextEditor";

const ArticleDrawer = () => {
    const [form] = Form.useForm();
    const onFinish = () => {
        console.log("Done")
    }

    return (
        <CustomDrawer>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
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
                    name="duration"
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
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: "This field is required." }]}
                >
                    <CustomTextEditor />
                </Form.Item>
            </Form>
        </CustomDrawer>
    )
}

export default ArticleDrawer
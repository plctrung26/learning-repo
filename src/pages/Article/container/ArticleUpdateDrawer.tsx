import { Form, Input } from "antd";
import CustomDrawer from "../../../components/CustomDrawer/CustomDrawer";
import CustomInput from "../../../components/FormComponents/CustomInput";
import CustomSelect from "../../../components/FormComponents/CustomSelect";
import CustomUpload from "../../../components/FormComponents/CustomUpload";
import CustomTextEditor from "../../../components/FormComponents/CustomTextEditor";
import { useEffect, useState } from "react";
import ArticleUpdateModal from "./ArticleUpdateModal";
import useTableRowData from "../../../hooks/articleHooks/useTableRowData";
import useCategoryData from "../../../hooks/articleHooks/useCategoryData";
import useArticleStore from "../../../store/article/useArticleStore";
const ArticleUpdateDrawer = () => {
    const [form] = Form.useForm();
    const { id, closeArticleDrawer, openArticleModal2 } = useArticleStore()
    const isDrawerOpen = useArticleStore(
        state => state.isOpen && state.action === 'update' && (state.type === 'drawer' || state.isSubmitOpen)
    );
    const contentValue = Form.useWatch("content", form);
    const [pendingFormData, setPendingFormData] = useState<any>(null);
    const { data: tableRowData } = useTableRowData(id)
    const { data: customSelectData } = useCategoryData()

    useEffect(() => {
        if (!tableRowData) return
        const test = {
            id: tableRowData.id,
            title: tableRowData.title,
            author: tableRowData.author,
            status: tableRowData?.status,
            category: tableRowData.category?.name,
            timeToRead: tableRowData.timeToRead,
            picture: {
                uri: tableRowData.picture?.uri || null,
                types: "image/jpeg",
                createdAt: tableRowData.picture?.createdAt,
            },
            content: tableRowData.content
        }
        form.setFieldsValue(test)
    }, [tableRowData])

    return (
        <>
            <CustomDrawer
                open={isDrawerOpen}
                drawerTitle="Edit Article"
                submitButtonText="Update"
                onClose={() => {
                    console.log("I")
                    form.resetFields();
                    closeArticleDrawer();
                }}
                onSubmit={async () => {
                    try {
                        const values = await form.validateFields();
                        setPendingFormData(values);
                        openArticleModal2();
                    } catch (err) {
                        console.log("Validation failed:", err);
                    }
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
                        <CustomSelect
                            options={[
                                { value: 'Published', label: 'Published' },
                                { value: 'Unpublished', label: 'Unpublished' },
                                { value: 'Draft', label: 'Draft' }
                            ]} />
                    </Form.Item>
                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: "This field is required." }]}
                    >
                        <CustomSelect
                            options={customSelectData} />
                    </Form.Item>
                    <Form.Item
                        label="Duration (Ex: 3 mins)"
                        name="timeToRead"
                        rules={[{ required: true, message: "This field is required." }]}
                    >
                        <CustomInput placeholder="Duration" type="number" />
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
                        <CustomTextEditor value={contentValue} />
                    </Form.Item>
                </Form>
            </CustomDrawer>
            <ArticleUpdateModal formData={pendingFormData} />

        </>

    );
};

export default ArticleUpdateDrawer;

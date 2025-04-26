import { Form, Input } from "antd";
import CustomDrawer from "../../../components/CustomDrawer/CustomDrawer";
import CustomInput from "../../../components/FormComponents/CustomInput";
import CustomSelect from "../../../components/FormComponents/CustomSelect";
import CustomUpload from "../../../components/FormComponents/CustomUpload";
import CustomTextEditor from "../../../components/FormComponents/CustomTextEditor";
import { ArticleDataType } from "../../../types/article/ArticleDataType";
import useCategoryData from "../../../hooks/articleHooks/useCategoryData";
import ArticleCreateModal from "./ArticleCreateModal";
import { useState } from "react";
import useArticleStore from "../../../store/article/useArticleStore";

const ArticleCreateDrawer = () => {
    const [form] = Form.useForm();
    const isDrawerOpen = useArticleStore((state) => state.isOpen && state.action === 'create' && (state.type === 'drawer' || state.isSubmitOpen))
    const { closeArticleDrawer, } = useArticleStore()
    const { data: customSelectData } = useCategoryData();
    const [modalData, setModalData] = useState<ArticleDataType>()
    const { setAction, openArticleModal2 } = useArticleStore()


    return (
        <>
            <CustomDrawer
                open={isDrawerOpen}
                drawerTitle="Create New Article"
                submitButtonText="Create"
                onClose={() => {
                    form.resetFields();
                    closeArticleDrawer();
                }}
                onSubmit={async () => {
                    try {
                        const values = await form.validateFields();
                        setModalData(values)
                        setAction('create')
                        openArticleModal2()

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
                        <CustomTextEditor />
                    </Form.Item>
                </Form>
            </CustomDrawer>
            <ArticleCreateModal formData={modalData}></ArticleCreateModal>
        </>

    );
};

export default ArticleCreateDrawer;

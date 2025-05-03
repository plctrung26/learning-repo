import { Form } from "antd";
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
import InputTitleValidaion from "../../../components/FormComponents/CustomFormTitle";
import useGlobalStore from "../../../store/useGlobalStore";

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
    const { setIsOnTop } = useGlobalStore()

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
                    form.resetFields();
                    closeArticleDrawer();
                    setIsOnTop(true)
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
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{
                        title: '',
                        author: '',
                        status: 'Select Status',
                        category: 'Select Category',
                        timeToRead: '',
                        picture: null,
                        content: ''
                    }}
                >
                    <Form.Item
                        label={<InputTitleValidaion value={"Title"} />}
                        name="title"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomInput placeholder="Title" />
                    </Form.Item>
                    <Form.Item
                        label={<InputTitleValidaion value={"Author"} />}
                        name="author"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomInput placeholder="Author" />
                    </Form.Item>
                    <Form.Item
                        label={<InputTitleValidaion value={"Status"} />}
                        name="status"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomSelect
                            options={[
                                { value: 'Published', label: 'Published' },
                                { value: 'Unpublished', label: 'Unpublished' },
                                { value: 'Draft', label: 'Draft' }
                            ]} />
                    </Form.Item>
                    <Form.Item
                        label={<InputTitleValidaion value={"Category"} />}
                        name="category"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomSelect
                            options={customSelectData} />
                    </Form.Item>
                    <Form.Item
                        label={<InputTitleValidaion value={"Duration (Ex: 3 mins)"} />}
                        name="timeToRead"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomInput placeholder="Duration" type="number" />
                    </Form.Item>
                    <Form.Item
                        label={<InputTitleValidaion value={"Image"} />}
                        name="picture"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomUpload />
                    </Form.Item>
                    <Form.Item
                        label={<InputTitleValidaion value={"Content"} />}
                        name="content"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >

                        <CustomTextEditor toolbarId="article-update-toolbar" value={contentValue} />
                    </Form.Item>
                </Form>
            </CustomDrawer>
            <ArticleUpdateModal formData={pendingFormData} />

        </>

    );
};

export default ArticleUpdateDrawer;

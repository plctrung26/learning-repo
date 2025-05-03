import { Form } from "antd";
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
import useGlobalStore from "../../../store/useGlobalStore";
import InputTitleValidaion from "../../../components/FormComponents/CustomFormTitle";

const ArticleCreateDrawer = () => {
    const [form] = Form.useForm();
    const isDrawerOpen = useArticleStore((state) => state.isOpen && state.action === 'create' && (state.type === 'drawer' || state.isSubmitOpen))
    const { closeArticleDrawer, } = useArticleStore()
    const { data: customSelectData } = useCategoryData();
    const [modalData, setModalData] = useState<ArticleDataType>()
    const { setAction, openArticleModal2 } = useArticleStore()
    const { setIsOnTop } = useGlobalStore()
    
    return (
        <>
            <CustomDrawer
                open={isDrawerOpen}
                drawerTitle="Create New Article"
                submitButtonText="Create"
                onClose={() => {
                    form.resetFields();
                    closeArticleDrawer();
                    setIsOnTop(true)
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
                            defaultValue="Select Status"
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
                            defaultValue="Select Category"
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
                        <CustomTextEditor toolbarId="article-create-toolbar" />
                    </Form.Item>
                </Form>
            </CustomDrawer>
            <ArticleCreateModal formData={modalData}></ArticleCreateModal>
        </>

    );
};

export default ArticleCreateDrawer;

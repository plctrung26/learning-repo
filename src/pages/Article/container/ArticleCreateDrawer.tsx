import { Form, Input } from "antd";
import CustomDrawer from "../../../components/CustomDrawer/CustomDrawer";
import CustomInput from "../../../components/FormComponents/CustomInput";
import CustomSelect from "../../../components/FormComponents/CustomSelect";
import CustomUpload from "../../../components/FormComponents/CustomUpload";
import CustomTextEditor from "../../../components/FormComponents/CustomTextEditor";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/articleStore/articleStore";
import { closeUpdateArticleDrawer } from "../../../redux/articleStore/articleDrawerSlice";
import useCreateData from "../../../hooks/articleHooks/useCreateData";
import { ArticleDataType } from "../../../types/article/ArticleDataType";
import useCategoryData from "../../../hooks/articleHooks/useCategoryData";

const ArticleCreateDrawer = () => {
    const [form] = Form.useForm();
    const isOpen = useSelector((state: RootState) => state.drawer.isArticleDrawerOpen && state.drawer.type === "drawer" && state.drawer.action === "create")
    const dispatch = useDispatch()
    const { mutate } = useCreateData();
    const { data: customSelectData } = useCategoryData();
    const handleCreate = (articleData: ArticleDataType) => {
        mutate(articleData);
    }

    return (
        <>
            <CustomDrawer
                open={isOpen}
                drawerTitle="Create New Article"
                submitButtonText="Create"
                onClose={() => {
                    form.resetFields();
                    dispatch(closeUpdateArticleDrawer())
                }}
                onSubmit={async () => {
                    try {
                        const values = await form.validateFields();
                        const formattedValues = {
                            ...values,
                            picture: values.picture.uri,
                            categoryId: values.category,
                            type: "article"
                        }
                        console.log(formattedValues)
                        const res = handleCreate(formattedValues)
                        console.log(res)
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
        </>

    );
};

export default ArticleCreateDrawer;

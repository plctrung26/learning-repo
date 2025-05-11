import { Form } from "antd";
import CustomDrawer from "../../../../components/CustomDrawer/CustomDrawer";
import InputTitleValidaion from "../../../../components/FormComponents/CustomFormTitle";
import CustomInput from "../../../../components/FormComponents/CustomInput";
import CustomSelect from "../../../../components/FormComponents/CustomSelect";
import useGlobalStore from "../../../../store/useGlobalStore";
import useAdminStore from "../../../../store/account/useAdminStore";
import { useState } from "react";
import { AdminDataType } from "../../../../types/account/admin/AdminDataType";
import AdminCreateModal from "./AdminCreateModal";

const AdminCreateDrawer = () => {
    const [form] = Form.useForm();
    const isDrawerOpen = useAdminStore((state) => state.isOpen && state.action === 'create' && (state.type === 'drawer' || state.isSubmitOpen))
    const { closeAdminDrawer, } = useAdminStore()
    const [modalData, setModalData] = useState<AdminDataType>()
    const { setAction, openAdminModal2 } = useAdminStore()
    const { setIsOnTop } = useGlobalStore()

    return (
        <>
            <CustomDrawer
                open={isDrawerOpen}
                drawerTitle="Create Admin User"
                submitButtonText="Create"
                onClose={() => {
                    form.resetFields();
                    closeAdminDrawer();
                    setIsOnTop(true)
                }}
                onSubmit={async () => {
                    try {
                        const values = await form.validateFields();
                        setModalData(values)
                        setAction('create')
                        openAdminModal2()

                    } catch (err) {
                        console.log("Validation failed:", err);
                    }
                }}>
                <Form
                    form={form}
                    layout="vertical"
                >
                    <Form.Item
                        label={<InputTitleValidaion value={"Username"} />}
                        name="username"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomInput placeholder="Username" />
                    </Form.Item>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <Form.Item
                            label={<InputTitleValidaion value={"Firstname"} />}
                            name="firstName"
                            rules={[{ required: true, message: "This field is required." }]}
                            required={false}
                            style={{ flex: 1 }}
                        >
                            <CustomInput placeholder="First name" />
                        </Form.Item>
                        <Form.Item
                            label={<InputTitleValidaion value={"Lastname"} />}
                            name="lastName"
                            rules={[{ required: true, message: "This field is required." }]}
                            required={false}
                            style={{ flex: 1 }}
                        >
                            <CustomInput placeholder="Last name" />
                        </Form.Item>
                    </div>
                    <Form.Item
                        label={<InputTitleValidaion value={"Email"} />}
                        name="email"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomInput placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        label={<InputTitleValidaion value={"active"} />}
                        name="status"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomSelect
                            options={[
                                { value: "active", label: "Active" },
                                { value: "inactive", label: "Inactive" },
                            ]}

                        />
                    </Form.Item>
                    <Form.Item
                        label={<InputTitleValidaion value={"Password"} />}
                        name="password"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomInput placeholder="Password" type="password" />
                    </Form.Item>
                </Form>
            </CustomDrawer>
            <AdminCreateModal formData={modalData}></AdminCreateModal>
        </>

    );
};

export default AdminCreateDrawer;

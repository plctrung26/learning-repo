import { Form } from "antd";
import { useEffect, useState } from "react";
import CustomDrawer from "../../../../components/CustomDrawer/CustomDrawer";
import InputTitleValidaion from "../../../../components/FormComponents/CustomFormTitle";
import CustomInput from "../../../../components/FormComponents/CustomInput";
import CustomSelect from "../../../../components/FormComponents/CustomSelect";
import useAdminStore from "../../../../store/account/useAdminStore";
import useGlobalStore from "../../../../store/useGlobalStore";
import useAdminRowData from "../../../../hooks/accountsHooks/admin/useAdminRowData";
import { AdminByIdDataType } from "../../../../types/account/admin/AdminDataType";
import AdminUpdateModal from "./AdminUpdateModal";

const AdminUpdateDrawer = () => {
    const [form] = Form.useForm();

    const { role, setRole, id, closeAdminDrawer, openAdminModal2 } = useAdminStore();
    const isDrawerOpen = useAdminStore(
        (state) =>
            state.isOpen && state.action === "update" && (state.type === "drawer" || state.isSubmitOpen)
    );
    const { data: adminRowData } = useAdminRowData(id);
    const [pendingFormData, setPendingFormData] = useState<any>();

    const { setIsOnTop } = useGlobalStore();

    useEffect(() => {
        if (adminRowData && isDrawerOpen) {
            console.log(adminRowData)
            setRole(adminRowData.role)
            const test: AdminByIdDataType = {
                id: adminRowData.id,
                username: adminRowData.username,
                firstName: adminRowData.firstName,
                lastName: adminRowData?.lastName,
                status: adminRowData.status,
                email: adminRowData.email,
                password: "",
            };
            form.setFieldsValue(test);
        }
    }, [adminRowData]);

    return (
        <>
            <CustomDrawer
                open={isDrawerOpen}
                drawerTitle="Edit Admin"
                submitButtonText="Update"
                onClose={() => {
                    form.resetFields();
                    closeAdminDrawer();
                    setIsOnTop(true);
                }}
                onSubmit={async () => {
                    try {
                        const values = await form.validateFields();
                        setPendingFormData(values);
                        openAdminModal2();
                    } catch (err) {
                        console.log("Validation failed:", err);
                    }
                }}
            >
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
                        <CustomInput placeholder="Username" disabled />
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
                        <CustomInput placeholder="Email" disabled />
                    </Form.Item>
                    <Form.Item
                        label={<InputTitleValidaion value={"Status"} />}
                        name="status"
                        rules={[{ required: true, message: "This field is required." }]}
                        required={false}
                    >
                        <CustomSelect
                            disabled={role === "superAdmin"}
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
            <AdminUpdateModal formData={pendingFormData} />
        </>

    );
};

export default AdminUpdateDrawer;
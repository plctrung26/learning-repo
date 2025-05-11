import CustomModal from "../../../../components/CutomModal/CustomModal";
import useCreateAdmin from "../../../../hooks/accountsHooks/admin/useCreateAdmin";
import useAdminStore from "../../../../store/account/useAdminStore";



const AdminCreateModal = ({ formData }: { formData: any }) => {

    const { closeAdminModal, closeAdminDrawer } = useAdminStore()
    const isModalOpen = useAdminStore((state) => state.isOpen && state.action === 'create' && state.isSubmitOpen)
    const { mutate } = useCreateAdmin();

    const handleConfirm = async () => {
        if (formData) {
            try {
                const formattedValues = {
                    ...formData
                }
                mutate(formattedValues)
            } catch (error) {
                console.error("Failed to create data: ", error)
            }
        }
        closeAdminModal()
        closeAdminDrawer()
    };

    return (
        <>
            <CustomModal
                title={"This is confirm Submit modal"}
                centered
                open={isModalOpen}
                onOk={handleConfirm}
                onCancel={closeAdminModal}
            >

            </CustomModal>
        </>
    );
};

export default AdminCreateModal;
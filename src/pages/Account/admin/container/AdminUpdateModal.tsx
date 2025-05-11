import CustomModal from "../../../../components/CutomModal/CustomModal";
import useAdminRowData from "../../../../hooks/accountsHooks/admin/useAdminRowData";
import useAdminStore from "../../../../store/account/useAdminStore";



const AdminUpdateModal = ({ formData }: { formData: any }) => {

    const { id, closeAdminModal, closeAdminDrawer } = useAdminStore()
    const isModalOpen = useAdminStore((state) => state.isOpen && state.action === 'update' && state.isSubmitOpen)
    const { updateAdmin } = useAdminRowData(id);

    const handleConfirm = async () => {
        if (formData && id) {
            try {
                const transformedData = {
                    ...formData,
                };
                updateAdmin({ id: id, data: transformedData });
            } catch (error) {
                console.error("Failed to update data")
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

export default AdminUpdateModal;
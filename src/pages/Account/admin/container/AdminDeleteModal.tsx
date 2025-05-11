import { ExclamationCircleTwoTone } from '@ant-design/icons';
import useAdminStore from '../../../../store/account/useAdminStore';
import CustomModal from '../../../../components/CutomModal/CustomModal';
import { deleteAdminById } from '../../../../apis/account/adminApi';

interface AdminDeleteModalProps {
    refetchTable?: () => void
}

const AdminDeleteModal = ({ refetchTable = () => {
    console.log("There is no refetch function")
} }: AdminDeleteModalProps) => {
    const { closeAdminModal, id } = useAdminStore()
    const isModalOpen = useAdminStore((state) => state.isOpen && state.type === 'modal' && state.isSubmitOpen && state.action === 'delete')
    const handleOk = async () => {
        try {
            if (id) {
                await deleteAdminById(id)
                closeAdminModal()
                refetchTable()
            }

        } catch (error) {
            console.error("Failed: ", error)
        }
    }

    return (

        <CustomModal
            title={
                <div style={{ textAlign: 'left' }}>
                    <div style={{
                        border: "2px"
                    }}>
                        <ExclamationCircleTwoTone />
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: 20 }}>Delete Admin?</div>
                </div>
            }
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={closeAdminModal}
        >
            <div>Are you sure you want to delete this item?</div>
        </CustomModal>

    );
};

export default AdminDeleteModal;